import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import MenuModal from '@/components/MenuModal';
import { getLocations } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Shoti & Saperavi',
    description: 'Shoti & Saperavi - Georgian Restaurant',
};

const displayFont = localFont({
    src: '../fonts/Jost.ttf',
    variable: '--font-display',
});

const headingFont = localFont({
    src: '../fonts/Felidae.ttf',
    variable: '--font-heading',
});

const decorationFont = localFont({
    src: '../fonts/3d_unicode.ttf',
    variable: '--font-decoration',
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locations = await getLocations();

    return (
        <html lang="en">
            <body
                className={`${displayFont.variable} ${headingFont.variable} ${decorationFont.variable} bg-background font-display text-foregroundWhite`}
            >
                <ModalProvider>
                    <ModalContainer />
                    <div className="min-h-screen mx-5 md:mx-10 min-[2000px]:max-w-[1900px] xl:mx-auto xl:max-w-[1240px] 2xl:max-w-[1500px] relative">
                        <Header locations={locations} />
                        {children}
                    </div>
                    <MenuModal />
                </ModalProvider>
            </body>
        </html>
    );
}
