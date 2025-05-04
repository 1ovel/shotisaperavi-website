import Button from '@/_components/Button';
import { logout } from '@/_lib/auth';

const Dashboard = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <Button onClick={logout}>Logout</Button>
        </div>
    );
};

export default Dashboard;
