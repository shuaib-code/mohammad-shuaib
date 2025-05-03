'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

export default function NotFoundPage() {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating((prev) => !prev);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
            <div className={`relative transition-transform ${isAnimating ? 'translate-y-2' : 'translate-y-0'}`}>
                <svg
                    enableBackground='new 0 0 226 249.135'
                    height='200'
                    viewBox='0 0 226 249.135'
                    width='200'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='113' cy='113' fill='#FFE585' r='109' />
                    <circle cx='68.732' cy='93' fill='#6E6E96' r='9' />
                    <circle cx='156.398' cy='93' fill='#6E6E96' r='9' />
                    <circle cx='113' cy='113' fill='none' stroke='#6E6E96' strokeWidth='8' />
                </svg>
            </div>

            <div className='mt-4 text-center tracking-widest'>
                <span className='block text-6xl text-gray-500'>4 0 4</span>
                <span className='text-xl text-gray-500'>Sorry, we couldn't find what you are looking for!</span>
            </div>

            <div className='mt-6'>
                <Link
                    href='/'
                    className='rounded-md bg-gray-200 p-3 font-mono text-xl text-gray-500 transition hover:shadow-md'>
                    Go back
                </Link>
            </div>
        </div>
    );
}
