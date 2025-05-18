import Spacer from '@/_components/Spacer';
import { Typography } from '@/_components/Typography';
import React from 'react';
import smallArrowIcon from '@/_images/small-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getUsers } from '@/_lib/users';
import CreateUserForm from '@/_components/CreateUserForm';
import UserCard from '@/_components/UserCard';

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div className="min-h-screen flex flex-col">
            <Spacer />
            <div>
                <div className="flex gap-4 items-start">
                    <Link href="/admin/dashboard">
                        <Image
                            src={smallArrowIcon}
                            width={24}
                            height={24}
                            alt="arrow"
                            className="rotate-180 pb-1"
                        />
                    </Link>
                    <div>
                        <Typography variant="h2">Users</Typography>
                        <Typography variant="decoration">საკვები</Typography>
                    </div>
                </div>
            </div>
            <Spacer size="md" />
            <div className="w-full h-full grid grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col gap-4">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            email={user.email}
                        />
                    ))}
                </div>
                <CreateUserForm />
            </div>
        </div>
    );
};

export default UsersPage;
