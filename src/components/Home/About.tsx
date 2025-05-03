import SocialLinks from './SocialLinks';
import { Code2, Database, Layers, Lightbulb } from 'lucide-react';

const AboutMe = () => {
    return (
        <div className='container mx-auto min-h-screen p-8 md:p-12 lg:p-16'>
            <div className='mx-auto max-w-3xl'>
                <h2 className='mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent'>
                        About me
                    </span>
                </h2>
                <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                        <div className='mt-1 flex-shrink-0'>
                            <Code2 className='h-6 w-6 text-blue-500' />
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>
                            I'm a <span className='font-semibold text-blue-700'>MERN Stack Developer</span> and an
                            aspiring <span className='font-semibold text-blue-700'>Software Engineer</span> with a
                            passion for building scalable, real-world applications that make an impact. I specialize in{' '}
                            <span className='font-semibold text-blue-700'>React</span>,{' '}
                            <span className='font-semibold text-blue-700'>Next.js</span>,{' '}
                            <span className='font-semibold text-blue-700'>TypeScript</span>,{' '}
                            <span className='font-semibold text-blue-700'>Node.js</span>, and{' '}
                            <span className='font-semibold text-blue-700'>Express</span> to craft modern, efficient, and
                            maintainable full-stack solutions.
                        </p>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='mt-1 flex-shrink-0'>
                            <Database className='h-6 w-6 text-indigo-500' />
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>
                            My skill set includes <span className='font-semibold text-indigo-700'>Redux</span>,{' '}
                            <span className='font-semibold text-indigo-700'>Tailwind CSS</span>,{' '}
                            <span className='font-semibold text-indigo-700'>MongoDB</span>,{' '}
                            <span className='font-semibold text-indigo-700'>Mongoose</span>,{' '}
                            {/* <span className='font-semibold text-indigo-700'>PostgreSQL</span>, and{' '} */}
                            <span className='font-semibold text-indigo-700'>REST APIs</span>. I'm also familiar with
                            {/* <span className='font-semibold text-indigo-700'>Prisma</span>,{' '} */}
                            <span className='font-semibold text-indigo-700'> NextAuth</span>,{' '}
                            <span className='font-semibold text-indigo-700'>JWT</span>, and{' '}
                            {/* <span className='font-semibold text-indigo-700'>Docker</span> */}
                            for building secure and scalable applications.
                        </p>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='mt-1 flex-shrink-0'>
                            <Lightbulb className='h-6 w-6 text-purple-500' />
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>
                            Beyond traditional web development, I explore{' '}
                            <span className='font-semibold text-purple-700'>system automation</span>,{' '}
                            <span className='font-semibold text-purple-700'>low-level scripting (Python/C++)</span>, and{' '}
                            <span className='font-semibold text-purple-700'>AI-driven features</span> to create smarter,
                            more adaptive software. I've built programs for{' '}
                            <span className='font-semibold text-purple-700'>hardware monitoring</span> and{' '}
                            <span className='font-semibold text-purple-700'>user interaction automation</span>, driven
                            by curiosity and real-world needs.
                        </p>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='mt-1 flex-shrink-0'>
                            <Layers className='h-6 w-6 text-blue-500' />
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>
                            I'm committed to continuous learning and love working on meaningful, collaborative projects.
                            Whether it's building a responsive UI, an API-driven backend, or integrating advanced logic
                            into an app, I'm focused on writing clean code that solves real problems. Let's connect and
                            build something impactful together!
                        </p>
                    </div>
                </div>

                <div className='my-4 mt-8 flex items-center justify-center'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
