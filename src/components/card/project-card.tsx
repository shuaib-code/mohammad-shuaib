import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
    project: {
        _id: string;
        slug: string;
        title: string;
        description: string;
        images: string[];
        technologies: string[];
        status: 'completed' | 'in-progress' | 'paused';
    };
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project._id}`} className='group'>
            <div className='overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 ease-in-out group-hover:scale-105'>
                <div className='relative h-48 w-full'>
                    {project.images && project.images.length > 0 ? (
                        <Image
                            src={project.images[0] || '/placeholder.svg'}
                            alt={project.title}
                            width={600}
                            height={450}
                            priority
                            className='h-auto w-full rounded-t-xl object-cover'
                        />
                    ) : (
                        <div className='flex h-full items-center justify-center bg-gray-200'>
                            <span className='text-gray-400'>No image available</span>
                        </div>
                    )}
                </div>
                <div className='p-4'>
                    <h3 className='mb-2 text-lg font-semibold'>{project.title}</h3>
                    <p className='mb-2 line-clamp-2 text-sm text-gray-600'>{project.description}</p>
                    <div className='mb-2 flex flex-wrap gap-2'>
                        {project.technologies &&
                            project.technologies.map((tech, index) => (
                                <span key={index} className='rounded-full bg-gray-200 px-2 py-1 text-xs'>
                                    {tech}
                                </span>
                            ))}
                    </div>
                    <div className='flex items-center justify-between'>
                        <span
                            className={`rounded-full px-2 py-1 text-xs ${
                                project.status === 'completed'
                                    ? 'bg-green-200 text-green-800'
                                    : project.status === 'in-progress'
                                      ? 'bg-yellow-200 text-yellow-800'
                                      : 'bg-red-200 text-red-800'
                            }`}>
                            {project.status}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
