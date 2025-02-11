import SocialLinks from './SocialLinks';

const AboutMe = () => {
    return (
        <div className='container mx-auto min-h-screen p-8 md:p-12 lg:p-16'>
            <div className='mx-auto max-w-3xl'>
                <h2 className='mb-4 mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl'>About Me</h2>
                <div>
                    <p className='mb-4 text-lg leading-relaxed text-gray-700'>
                        I'm a <strong>full-stack developer</strong> with experience in <strong>React</strong>,{' '}
                        <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and{' '}
                        <strong>Express</strong>. I specialize in building modern, scalable web applications with clean,
                        maintainable code.
                    </p>

                    <p className='mb-4 text-lg leading-relaxed text-gray-700'>
                        With strong skills in <strong>TypeScript</strong>, <strong>JavaScript</strong>,{' '}
                        <strong>Redux</strong>, and <strong>Mongoose</strong>, I create efficient solutions for both{' '}
                        <strong>front-end</strong> and <strong>back-end</strong> challenges, including{' '}
                        <strong>state management</strong> and <strong>database interaction</strong>.
                    </p>

                    <p className='mb-4 text-lg leading-relaxed text-gray-700'>
                        Passionate about <strong>responsive design</strong> and modern tools, I focus on creating{' '}
                        <strong>intuitive digital experiences</strong> while keeping up with the latest{' '}
                        <strong>web development trends</strong>.
                    </p>

                    <p className='mb-4 text-lg leading-relaxed text-gray-700'>
                        Ready to help with <strong>front-end</strong>, <strong>full-stack</strong>, or{' '}
                        <strong>API development</strong>—let's connect and bring your project to life!
                    </p>
                </div>

                <SocialLinks />
            </div>
        </div>
    );
};

export default AboutMe;
