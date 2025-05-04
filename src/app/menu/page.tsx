import { Suspense } from 'react';
import MenuContent from '@/_sections/MenuContent';
import Footer from '@/_components/Footer';

const MenuPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MenuContent />
            </Suspense>
            <Footer />
        </div>
    );
};

export default MenuPage;
