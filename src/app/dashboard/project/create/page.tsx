'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BackgroundBeams } from '@/components/ui/background-beams';

import { toast } from 'sonner';

export default function AddProjectPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const response = await fetch(`https://mohammad-shuaib.vercel.app/api/project`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });

        setLoading(false);
        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
            router.push('/projects');
        } else {
            toast.error(data.error);
        }
    };

    const inputStyle = `block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none`;

    return (
        <div className='relative flex items-center justify-center p-0 md:p-10'>
            <div className='z-20 mb-40 w-full rounded-xl bg-white p-8 shadow-lg'>
                <h2 className='mb-6 text-center text-3xl font-semibold text-gray-700'>Add Project</h2>
                <form
                    className='grid grid-cols-1 items-center justify-between gap-3 space-y-4 md:grid-cols-2'
                    onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <input type='text' name='title' placeholder='Title' required className={inputStyle} />
                        <input type='text' name='slug' placeholder='Slug' required className={inputStyle} />
                        <input type='url' name='image' placeholder='Image URL' required className={inputStyle} />
                        <input
                            type='text'
                            name='description'
                            placeholder='Short Description'
                            required
                            className={inputStyle}
                        />
                        <textarea
                            name='content'
                            placeholder='Detailed Content (Optional)'
                            rows={4}
                            className='block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed text-gray-900 placeholder-gray-400 shadow-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none'></textarea>
                        <input
                            type='text'
                            name='technologies'
                            placeholder='Technologies (comma-separated)'
                            className={inputStyle}
                        />
                    </div>
                    <div className='space-y-4'>
                        <input type='url' name='liveUrl' placeholder='Live URL' className={inputStyle} />
                        <input type='url' name='repoUrl' placeholder='Repository URL' className={inputStyle} />
                        <input type='date' name='startDate' placeholder='Start Date' required className={inputStyle} />
                        <input type='date' name='endDate' placeholder='End Date (Optional)' className={inputStyle} />
                        <input
                            type='text'
                            name='category'
                            placeholder='Category (e.g., Web, App)'
                            required
                            className={inputStyle}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full max-w-md rounded-full bg-yellow-400 px-6 py-3 text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}
