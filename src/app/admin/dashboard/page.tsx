import Spacer from '@/_components/Spacer';
import DashboardContent from '@/_sections/DashboardContent';
import { Typography } from '@/_components/Typography';
import Button from '@/_components/Button';
import { logout } from '@/_lib/auth';
const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Spacer />
            <div className="flex justify-between">
                <div>
                    <Typography variant="h2">Dashboard</Typography>
                    <Typography variant="decoration">საკვები</Typography>
                </div>
                <div>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
            <Spacer size="md" />
            <div className="h-full">
                <DashboardContent />
            </div>
        </div>
    );
};

export default Dashboard;
