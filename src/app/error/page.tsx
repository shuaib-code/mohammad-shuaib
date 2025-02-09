'use client';

import Link from 'next/link';

export default function AuthErrorPage() {
    const error = 'Authentication failed';

    return (
        <div className='flex h-screen items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg'>
                <h1 className='mb-2 text-2xl font-bold text-red-600'>Authentication Error</h1>
                <p className='mb-4 text-gray-700'>{error}</p>
                <Link href='/login'>
                    <button className='mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'>
                        Go to Login
                    </button>
                </Link>
            </div>
        </div>
    );
}
