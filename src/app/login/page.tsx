'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

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
        <div className='bg-light dark:bg-dark flex h-screen items-center justify-center'>
            <form onSubmit={handleLogin} className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800'>
                <h2 className='mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-white'>Login</h2>

                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'>
                    Login
                </button>
            </form>
        </div>
    );
}
