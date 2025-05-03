import { ProjectCard } from '@/components/card/project-card';

export default async function ProjectsPage() {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/project`, {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch projects');

    const data = await res.json();

    return (
        <main className='mx-auto max-w-6xl p-6'>
            <h1 className='mb-8 text-3xl font-bold'>All Projects</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {data && data.projects.map((project: any) => <ProjectCard key={project.slug} project={project} />)}
            </div>
        </main>
    );
}
