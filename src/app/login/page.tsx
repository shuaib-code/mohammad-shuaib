'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BackgroundBeams } from '@/components/ui/background-beams';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', { email, password, redirect: false });

        if (res?.ok) router.push('/dashboard');
        else router.push('/error');
    };

    return (
        <div className='relative flex h-screen items-center justify-center bg-gray-50'>
            <form onSubmit={handleLogin} className='z-20 w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
                <h2 className='mb-6 text-center text-3xl font-semibold text-gray-700'>Login</h2>

                <div className='mb-4'>
                    <label htmlFor='email' className='m-2 block text-sm font-medium text-gray-700'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='block w-full max-w-sm rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='password' className='ml-2 block text-sm font-medium text-gray-700'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='block w-full max-w-sm rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                    Login
                </button>
            </form>
            <BackgroundBeams />
        </div>
    );
}
