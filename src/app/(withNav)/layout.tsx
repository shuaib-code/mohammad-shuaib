import Navbar from '@/components/Nav/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Navbar />
            {children}
        </section>
    );
}
