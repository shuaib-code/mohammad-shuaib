'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BackgroundBeams } from '@/components/ui/background-beams';

import { toast } from 'sonner';

export default function AddBlogPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        console.log(process.env.NEXT_API_URL);
        const response = await fetch(`https://mohammad-shuaib.vercel.app/api/blog`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });

        setLoading(false);
        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
            router.push('/blog');
        } else {
            toast.error(data.error);
        }
    };

    return (
        <div className='relative flex h-screen items-center justify-center'>
            <div className='z-20 mb-40 w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
                <h2 className='mb-6 text-center text-3xl font-semibold text-gray-700'>Add Blog</h2>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        className='block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                        required
                    />
                    <input
                        type='text'
                        name='image'
                        placeholder='Image URL'
                        className='block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                        required
                    />
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
                        className='block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                        required
                    />
                    <textarea
                        name='content'
                        placeholder='Content'
                        rows={4}
                        className='block w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'
                        required
                    />
                    <button
                        type='submit'
                        className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}
