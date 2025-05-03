'use client';

import { signOut } from 'next-auth/react';

export default function SignOutBtn() {
    return (
        <button
            onClick={() => signOut()}
            className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
            Sign Out
        </button>
    );
}
