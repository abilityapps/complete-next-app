import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

import { FC } from 'react'
import { Icons } from '../Icons';
import { User } from 'next-auth';

interface UserAvatarProps {
    user: Pick<User, 'name' | 'image' | 'email'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
    return (
        <Avatar>
            {user.image ? (
                <AvatarImage alt='Profile Picture' src={user.image} />
            ) : (
                <AvatarFallback>
                    <span className='sr-only'>
                        {user?.name}
                    </span>
                    <Icons.user className='w-4 h-4' />
                </AvatarFallback>
            )}
        </Avatar>
    );
}

export default UserAvatar