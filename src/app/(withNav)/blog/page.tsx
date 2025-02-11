import Link from 'next/link';

const blogs = [
    {
        id: 1,
        title: 'Understanding Next.js 15',
        description: 'A deep dive into the new features of Next.js 15.',
        date: 'Feb 9, 2025',
        image: 'https://source.unsplash.com/400x300/?technology'
    },
    {
        id: 2,
        title: 'Styling with Tailwind CSS',
        description: 'How to effectively use Tailwind CSS for modern designs.',
        date: 'Feb 8, 2025',
        image: 'https://source.unsplash.com/400x300/?design'
    },
    {
        id: 3,
        title: 'Optimizing Performance in Next.js',
        description: 'Tips and tricks to boost the performance of your Next.js apps.',
        date: 'Feb 7, 2025',
        image: 'https://source.unsplash.com/400x300/?performance'
    }
];

export default function BlogPage() {
    return (
        <div className='min-h-screen px-4 py-10 md:px-12'>
            <h1 className='mb-8 text-center text-3xl font-bold text-gray-800'>Latest Blogs</h1>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className='transform overflow-hidden rounded-2xl bg-white shadow-md transition hover:scale-105'>
                        <img src={blog.image} alt={blog.title} className='h-48 w-full object-cover' />
                        <div className='p-6'>
                            <h2 className='text-xl font-semibold text-gray-900'>{blog.title}</h2>
                            <p className='mt-2 text-gray-600'>{blog.description}</p>
                            <p className='mt-2 text-sm text-gray-500'>{blog.date}</p>
                            <Link
                                href={`/blog/${blog.id}`}
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
