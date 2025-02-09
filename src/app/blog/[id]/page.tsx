import { notFound } from 'next/navigation';

const blogs = [
    { id: '1', title: 'Next.js 15 Features', content: 'Learn about Next.js 15...' },
    { id: '2', title: 'Tailwind CSS Tips', content: 'Improve your Tailwind skills...' }
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const blog = blogs.find((post) => post.id === id);

    if (!blog) return notFound();

    return (
        <main className='mx-auto max-w-3xl space-y-6 p-6'>
            <h1 className='text-4xl font-bold'>{blog.title}</h1>
            <p className='text-gray-600'>{blog.content}</p>
        </main>
    );
}
