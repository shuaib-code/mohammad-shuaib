import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/blog/id?id=${(await params).id}`);

    if (!res.ok) {
        notFound();
    }

    const { blog } = await res.json();

    return (
        blog && (
            <div className='mx-auto max-w-2xl p-4'>
                <h1 className='mb-4 text-3xl font-bold'>{blog.title}</h1>
                <div className='mb-4'>
                    <Image
                        src={blog.image || '/placeholder.svg'}
                        alt={blog.title}
                        width={800}
                        height={400}
                        priority
                        className='h-64 w-full rounded-2xl object-cover'
                    />
                </div>
                <p className='mb-4 text-gray-600'>Author: {blog.author}</p>
                <div className='prose max-w-none'>
                    <p>{blog.content}</p>
                </div>
            </div>
        )
    );
}
