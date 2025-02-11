'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/ms1.png';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <nav className='mx-auto flex max-w-[75rem] items-center justify-between p-4 lg:px-16'>
            <Link href='/'>
                <Image src={logo} alt='Logo' width={40} height={40} className='cursor-pointer' />
            </Link>

            {/* Navigation Buttons */}
            <div className='flex gap-4'>
                <Link href='/projects'>
                    <Button variant='ghost'>Projects</Button>
                </Link>
                <Link href='/blog' className='hidden md:flex'>
                    <Button variant='ghost'>Blog</Button>
                </Link>
                <Link href='/dashboard' className='hidden md:flex'>
                    <Button variant='ghost'>Dashboard</Button>
                </Link>
                <Link href='/contact'>
                    <Button variant='ghost'>Contact</Button>
                </Link>
                <Link href='/resume.pdf' target='_blank'>
                    <button className='rounded-3xl bg-[#ffcd42] px-6 py-2 text-sm font-semibold transition duration-300 ease-in-out hover:bg-[#e6b83b]'>
                        Resume
                    </button>
                </Link>
            </div>
        </nav>
    );
}
