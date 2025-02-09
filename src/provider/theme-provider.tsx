'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { flushSync } from 'react-dom';

// Define the theme types
type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, defaultTheme = 'dark', storageKey = 'nextjs-theme' }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem(storageKey) as Theme;
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);

    const toggleTheme = async (newTheme: Theme) => {
        if (
            typeof document.startViewTransition !== 'function' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            updateTheme(newTheme);
            return;
        }

        try {
            await document.startViewTransition(() => {
                flushSync(() => updateTheme(newTheme));
            }).ready;
        } catch {
            updateTheme(newTheme); // Fallback if startViewTransition fails
        }

        // Ensure animation still runs
        const x = window.innerWidth;
        const y = 0;
        const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

        document.documentElement.animate(
            {
                clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
            },
            {
                duration: 700,
                easing: 'ease-in-out'
            }
        );
    };

    const updateTheme = (newTheme: Theme) => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
