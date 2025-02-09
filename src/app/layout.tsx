import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';

import '@/app/globals.css';
import ProviderWarpper from '@/provider/ProviderWrapper';

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400', '500', '600', '300', '700']
});

export const metadata: Metadata = {
    title: 'Mohammad Shuaib | Full Stack Developer',
    description: 'Passionate about crafting intuitive web experiences and building robust applications.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${robotoSlab.className} bg-background text-foreground max-h-full font-sans antialiased dark:bg-gray-900`}>
                <ProviderWarpper>{children}</ProviderWarpper>
            </body>
        </html>
    );
};

export default Layout;
