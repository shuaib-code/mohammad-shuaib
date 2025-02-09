'use client';

import { signOut } from 'next-auth/react';

export default function SignOutBtn() {
    return (
        <button
            onClick={() => signOut()}
            className='rounded-lg bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-700'>
            Sign Out
        </button>
    );
}
