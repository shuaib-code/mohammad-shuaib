import Link from 'next/link';

const projects = [
    {
        id: '1',
        title: 'Next.js Portfolio',
        description: 'A portfolio built with Next.js 15, Tailwind CSS, and TypeScript.',
        image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    },
    {
        id: '2',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with Next.js and MongoDB.',
        image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    },
    {
        id: '3',
        title: 'AI Chatbot',
        description: 'An AI-powered chatbot using OpenAI API and Next.js.',
        image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    }
];

export default function ProjectsPage() {
    return (
        <main className='mx-auto max-w-6xl p-6'>
            <h1 className='mb-8 text-center text-4xl font-bold'>My Projects</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className='group block'>
                        <div className='transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 group-hover:scale-105'>
                            <img src={project.image} alt={project.title} className='h-48 w-full object-cover' />
                            <div className='p-4'>
                                <h2 className='text-2xl font-semibold'>{project.title}</h2>
                                <p className='mt-2 text-gray-600'>{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
