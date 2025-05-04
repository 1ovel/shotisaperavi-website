import Image from 'next/image';
import imageTableAlt from '@/_images/photo-table-alt.webp';
import LoginForm from '@/_components/LoginForm';
import { Typography } from '@/_components/Typography';

export default function AdminLogin() {
    return (
        <div className="min-h-screen flex">
            <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Typography variant="h2">Login</Typography>
                    <LoginForm />
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 relative">
                <Image
                    fill
                    src={imageTableAlt}
                    alt="Shoti & Saperavi"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
