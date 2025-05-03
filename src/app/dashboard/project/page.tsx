import { revalidatePath } from 'next/cache';
import Link from 'next/link';

import { getProjects } from '@/app/actions/get';

interface Project {
    _id: string;
    title: string;
    slug: string;
    description: string;
}

async function deleteProject(formData: FormData) {
    'use server';

    const id = formData.get('id') as string;

    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/project`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });

    if (!res.ok) throw new Error('Error deleting project');

    // Revalidate and refresh the page
    revalidatePath('/dashboard/projects');
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className='p-6'>
            <h1 className='mb-6 text-center text-3xl font-bold'>All Projects</h1>
            <div className='mb-4 flex justify-end'>
                <Link href='/dashboard/project/create'>
                    <button className='w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none'>
                        Add Project
                    </button>
                </Link>
            </div>
            <table className='w-full border-collapse'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-300 px-4 py-2'>Title</th>
                        <th className='border border-gray-300 px-4 py-2'>Slug</th>
                        <th className='border border-gray-300 px-4 py-2'>Actions</th>
                        <th className='border border-gray-300 px-4 py-2'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project: Project) => (
                        <tr key={project._id}>
                            <td className='border border-gray-300 px-4 py-2'>{project.title}</td>
                            <td className='border border-gray-300 px-4 py-2'>{project.slug}</td>
                            <td className='border border-gray-300 px-4 py-2'>
                                <Link href={`/dashboard/project/edit/${project._id}`}>
                                    <button className='rounded bg-blue-500 px-3 py-1 text-white'>Update</button>
                                </Link>
                            </td>
                            <td className='flex items-center justify-center border border-gray-300 px-4 py-2'>
                                <form action={deleteProject}>
                                    <input type='hidden' name='id' value={project._id} />
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
