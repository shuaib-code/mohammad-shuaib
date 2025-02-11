'use client';

import { useState } from 'react';

import { Mail } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });

        setLoading(false);

        const data = await response.json();
        if (response.ok) {
            toast.success(data.message);
            window.location.reload();
        } else {
            toast.error(data.error);
        }
    };
    return (
        <div className='relative flex h-screen items-center justify-center bg-gray-50'>
            <div className='z-20 mb-40 w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
                <h2 className='mb-6 text-center text-3xl font-semibold text-gray-700'>Get In Touch</h2>
                <p className='mb-4 text-center text-sm text-gray-500'>
                    We'd love to hear from you! Fill out the form below.
                </p>

                <form className='space-y-4' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        className='block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                    />
                    <textarea
                        placeholder='Message'
                        name='message'
                        rows={4}
                        className='block w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                    />
                    <button className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                        Submit
                    </button>
                </form>

                {/* Contact Info */}
                <div className='mt-6 text-center'>
                    <div className='flex flex-col space-y-2 text-sm text-gray-600'>
                        <div className='flex items-center justify-center space-x-2'>
                            <Mail className='text-yellow-400' />
                            <span>shuaib-cyclist@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
