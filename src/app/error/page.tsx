'use client';

import Link from 'next/link';

export default function AuthErrorPage() {
    const error = 'Authentication failed';

    return (
        <div className='flex h-screen items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-md rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105'>
                <div className='text-center'>
                    <h1 className='mb-4 text-3xl font-bold tracking-tight text-red-600'>Authentication Error</h1>
                    <p className='mb-6 leading-relaxed text-gray-800'>{error}</p>
                    <Link href='/login' className='inline-block'>
                        <button className='w-full rounded-full bg-yellow-400 px-16 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                            Go to Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
