import { ThemeProvider } from './theme-provider';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

export default function ProviderWarpper({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode='wait'>
            <ThemeProvider defaultTheme='light' storageKey='nextjs-theme'>
                {children}
                <Toaster richColors expand={false} position='top-right' />
            </ThemeProvider>
        </AnimatePresence>
    );
}
