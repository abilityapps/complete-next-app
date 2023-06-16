"use client";

import { FC, useState } from 'react'

import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> { };

const AuthForm: FC<AuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const loginWithGoogle = async () => {
        setIsLoading(true);
        toast({
            title: 'Signing In...',
            description: 'You are being redirected to sign in with Google.',
            variant: 'default',
        });

        try {
            await signIn('google');
        } catch (error) {
            toast({
                title: 'Error',
                description: 'There was an error signing in.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button size={'sm'} onClick={() => loginWithGoogle()} className='w-full' isLoading={isLoading}>
                {isLoading ? null : <Icons.google className='h-5 w-5 mr-2' />}
                Google
            </Button>
        </div>
    );
}

export default AuthForm