import About from '@/components/Home/About';
import Banner from '@/components/Home/Banner';
import Skills from '@/components/Home/Skills';
import Navbar from '@/components/Nav/Navbar';
import SmoothScroll from '@/components/animation/smoth-scroll';

const Page = () => {
    return (
        <>
            <SmoothScroll />
            <Navbar />
            <section className='h-screen'>
                <Banner />
            </section>
            <section className='h-screen'>
                <About />
            </section>
            <section className='h-screen'>
                <Skills />
            </section>
        </>
    );
};

export default Page;
