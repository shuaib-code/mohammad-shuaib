import { revalidatePath } from 'next/cache';
import Link from 'next/link';

import { getBlogs } from '@/app/actions/get';

interface Blog {
    _id: string;
    title: string;
    image: string;
    author: string;
}

async function deleteBlog(formData: FormData) {
    'use server';

    const id = formData.get('id') as string;

    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/blog`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });

    if (!res.ok) throw new Error('Error deleting blog');

    // Revalidate and refresh the page
    revalidatePath('/dashboard/blogs');
}

export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <div className='p-6'>
            <h1 className='mb-6 text-center text-3xl font-bold'>All Blogs</h1>
            <div className='mb-4 flex justify-end'>
                <Link href='/dashboard/blog/create'>
                    <button className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                        Add Blog
                    </button>
                </Link>
            </div>
            <table className='w-full border-collapse'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-300 px-4 py-2'>Title</th>
                        <th className='border border-gray-300 px-4 py-2'>Author</th>
                        <th className='border border-gray-300 px-4 py-2'>Actions</th>
                        <th className='border border-gray-300 px-4 py-2'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog: Blog) => (
                        <tr key={blog._id}>
                            <td className='border border-gray-300 px-4 py-2'>{blog.title}</td>

                            <td className='border border-gray-300 px-4 py-2'>{blog.author}</td>
                            <td className='border border-gray-300 px-4 py-2'>
                                <Link href={`/blog/edit/${blog._id}`}>
                                    <button className='rounded bg-blue-500 px-3 py-1 text-white'>Update</button>
                                </Link>
                            </td>
                            <td className='flex items-center justify-center border border-gray-300 px-4 py-2'>
                                <form action={deleteBlog}>
                                    <input type='hidden' name='id' value={blog._id} />
                                    <button type='submit' className='rounded bg-red-500 px-3 py-1 text-white'>
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
