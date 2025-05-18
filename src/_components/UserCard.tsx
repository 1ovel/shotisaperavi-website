'use client';

import { Typography } from '@/_components/Typography';
import { IconButton } from '@/_components/IconButton';
import { deleteUser } from '@/_lib/users';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UserCardProps {
    id: string;
    email: string;
}

const UserCard = ({ id, email }: UserCardProps) => {
    const router = useRouter();

    return (
        <div className="w-full p-4 flex items-center border border-backgroundLight justify-between">
            <Typography variant="body">{email}</Typography>
            <IconButton
                onClick={() => {
                    deleteUser(id);
                    router.refresh();
                }}
                icon={Trash}
            />
        </div>
    );
};

export default UserCard;
