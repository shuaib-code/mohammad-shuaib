import About from '@/components/Home/About';
import Banner from '@/components/Home/Banner';
import ContactSection from '@/components/Home/Contact';
import Footer from '@/components/Home/Footer';
import Skills from '@/components/Home/Skills';
import Navbar from '@/components/Nav/Navbar';

const Page = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Skills />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Page;
