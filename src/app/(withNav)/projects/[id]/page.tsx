import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/project/id?id=${(await params).id}`);

    if (!res.ok) {
        notFound();
    }

    const { project } = await res.json();

    return (
        <div className='container mx-auto px-4 py-8'>
            <Link href='/projects' className='mb-4 inline-block text-blue-600 hover:underline'>
                &larr; Back to all projects
            </Link>
            <h1 className='mb-4 text-4xl font-bold'>{project.title}</h1>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                    {project.images && project.images.length > 0 ? (
                        <div className='relative h-96 w-full overflow-hidden rounded-lg'>
                            <Image
                                src={project.images[0] || '/placeholder.svg'}
                                alt={project.title}
                                width={1000}
                                height={800}
                                priority
                                className='h-auto w-full rounded-xl object-cover'
                            />
                        </div>
                    ) : (
                        <div className='flex h-96 w-full items-center justify-center rounded-lg bg-gray-200'>
                            <span className='text-gray-400'>No image available</span>
                        </div>
                    )}
                </div>
                <div>
                    <p className='mb-4 text-gray-600'>{project.description}</p>
                    {project.technologies && (
                        <div className='mb-4'>
                            <h2 className='mb-2 text-xl font-semibold'>Technologies</h2>
                            <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech: string, index: number) => (
                                    <span key={index} className='rounded-full bg-gray-200 px-3 py-1 text-sm'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        {project.startDate && (
                            <div>
                                <h3 className='font-semibold'>Start Date</h3>
                                <p>{new Date(project.startDate).toLocaleDateString()}</p>
                            </div>
                        )}
                        {project.endDate && (
                            <div>
                                <h3 className='font-semibold'>End Date</h3>
                                <p>{new Date(project.endDate).toLocaleDateString()}</p>
                            </div>
                        )}
                        <div>
                            <h3 className='font-semibold'>Status</h3>
                            <p
                                className={`inline-block rounded-full px-2 py-1 text-sm ${
                                    project.status === 'completed'
                                        ? 'bg-green-200 text-green-800'
                                        : project.status === 'in-progress'
                                          ? 'bg-yellow-200 text-yellow-800'
                                          : 'bg-red-200 text-red-800'
                                }`}>
                                {project.status}
                            </p>
                        </div>
                        {project.category && (
                            <div>
                                <h3 className='font-semibold'>Category</h3>
                                <p>{project.category}</p>
                            </div>
                        )}
                    </div>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mr-4 inline-block rounded-xl bg-yellow-400 px-4 py-2 text-white transition-colors hover:bg-yellow-500'>
                            View Live
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block rounded-xl bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-900'>
                            View Repository
                        </a>
                    )}
                </div>
            </div>
            {project.content && (
                <div className='mt-8'>
                    <h2 className='mb-4 text-2xl font-bold'>Project Details</h2>
                    <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
            )}
            {project.challenges && (
                <div className='mt-8'>
                    <h2 className='mb-4 text-2xl font-bold'>Challenges</h2>
                    <p>{project.challenges}</p>
                </div>
            )}
            {project.results && (
                <div className='mt-8'>
                    <h2 className='mb-4 text-2xl font-bold'>Results</h2>
                    <p>{project.results}</p>
                </div>
            )}
            {project.testimonials && project.testimonials.length > 0 && (
                <div className='mt-8'>
                    <h2 className='mb-4 text-2xl font-bold'>Testimonials</h2>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        {project.testimonials.map((testimonial: string, index: number) => (
                            <blockquote key={index} className='rounded-lg bg-gray-100 p-4 italic'>
                                "{testimonial}"
                            </blockquote>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
