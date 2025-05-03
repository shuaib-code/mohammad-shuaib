import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import Me from '@/assets/pp1.png';
import SignOutBtn from '@/components/auth/sign-out';

import { HomeIcon, MessageCircle, NotebookText, ProjectorIcon } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Blogs', href: '/dashboard/blog', icon: NotebookText },
    { name: 'Projects', href: '/dashboard/project', icon: ProjectorIcon },
    { name: 'Messages', href: '/dashboard/contact', icon: MessageCircle }
];

export default async function Layout({ children }: { children: React.ReactNode }) {
    const pathname = (await headers()).get('x-pathname') || '/dashboard';
    return (
        <div className='grid h-screen min-h-screen w-full gap-4 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr] lg:gap-0'>
            <div className='hidden bg-gray-100/40 lg:block'>
                <div className='flex h-full max-h-screen flex-col gap-2'>
                    <div className='flex h-[60px] items-center px-6'>
                        <Link href='#' className='flex items-center gap-2 font-semibold' prefetch={false}>
                            <Image src={Me} width={30} height={30} alt='Mohammad Shuaib' />
                            <span>Mohammad Shuaib</span>
                        </Link>
                    </div>
                    <div className='flex-1 overflow-auto py-2'>
                        <nav className='grid items-start px-4 text-sm font-medium'>
                            {navItems.map(({ name, href, icon: Icon }) => {
                                const isActive = pathname === href;
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                                            isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                        prefetch={false}>
                                        <Icon className='h-4 w-4' />
                                        {name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div className='mb-4 px-8'>
                        <SignOutBtn />
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}
