import { notFound } from 'next/navigation';

const projects = [
    {
        id: '1',
        title: 'Next.js Portfolio',
        description: 'A portfolio built with Next.js 15, Tailwind CSS, and TypeScript.',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    },
    {
        id: '2',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with Next.js and MongoDB.',
        tech: ['Next.js', 'MongoDB', 'Stripe'],
        image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    }
];

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <main className='mx-auto max-w-4xl space-y-6 p-6'>
            <h1 className='text-4xl font-bold'>{project.title}</h1>
            <img src={project.image} alt={project.title} className='w-full rounded-lg shadow-md' />
            <p className='text-gray-600'>{project.description}</p>
            <div className='flex gap-2'>
                {project.tech.map((tech) => (
                    <span key={tech} className='rounded-md bg-gray-200 px-3 py-1 text-sm'>
                        {tech}
                    </span>
                ))}
            </div>
        </main>
    );
}
