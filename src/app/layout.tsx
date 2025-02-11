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
            <head>
                <title>Mohammad Shuaib | Developer Portfolio</title>
                <meta name='description' content="Welcome to Mohammad Shuaib's developer portfolio." />
                <meta name='keywords' content='developer, portfolio, web developer, Mohammad Shuaib' />
                <meta name='robots' content='index, follow' />
                <link rel='canonical' href='https://mohammad-shuaib.vercel.app' />
            </head>
            <body className={`${robotoSlab.className} text-foreground max-h-full bg-white font-sans antialiased`}>
                <ProviderWarpper>{children}</ProviderWarpper>
            </body>
        </html>
    );
};

export default Layout;
