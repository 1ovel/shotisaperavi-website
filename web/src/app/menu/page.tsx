import { Suspense } from 'react';
import MenuContent from '@/sections/MenuContent';
import Footer from '@/components/Footer';

const MenuPage = () => {
    return (
        <div>
            <Suspense fallback={<div></div>}>
                <MenuContent />
            </Suspense>
            <Footer />
        </div>
    );
};

export default MenuPage;
