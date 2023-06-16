"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/DropdownMenu';

import { FC } from 'react'
import Link from 'next/link';
import { User } from 'next-auth';
import UserAvatar from '../user/UserAvatar';
import { signOut } from 'next-auth/react';

interface UserAccountMenuProps {
    user: Pick<User, 'name' | 'image' | 'email'>
};

const UserAccountMenu: FC<UserAccountMenuProps> = ({ user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user={user} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-white' align='end'>
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-1 leading-none'>
                        {user.name && <p className='font-medium'>{user.name}</p>}
                        {user.email && <p className='w-[200px] truncate text-sm text-zinc-700'>{user.email}</p>}
                    </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href='/'>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href='/dashboard'>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href='/settings'>Settings</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className='cursor-pointer' onSelect={(event) => {
                    event.preventDefault()
                    signOut({
                        callbackUrl: '/'
                    })
                }}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountMenu