import Link from 'next/link';

export default async function BlogPage() {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/blog`, {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');

    const data = await res.json();
    return (
        <div className='mx-auto min-h-screen max-w-6xl px-4 py-10 md:px-12'>
            <h1 className='mb-8 text-center text-3xl font-bold text-gray-800'>Latest Blogs</h1>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {data &&
                    data.blogs.map((blog: any) => (
                        <div
                            key={blog._id}
                            className='transform overflow-hidden rounded-2xl bg-white shadow-md transition hover:scale-105'>
                            <img src={blog.image} alt={blog.title} className='h-48 w-full object-cover' />
                            <div className='p-6'>
                                <h2 className='text-xl font-semibold text-gray-900'>{blog.title}</h2>
                                <p className='mt-2 text-gray-600'>{blog.description}</p>

                                <Link
                                    href={`/blog/${blog._id}`}
                                    className='mt-4 inline-block font-medium text-blue-600 hover:underline'>
                                    Read more →
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
