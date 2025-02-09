'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/provider/theme-provider';

import './theme.css';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='theme-toggle-wrapper rounded-full drop-shadow'>
            <label className='switch'>
                <input type='checkbox' checked={theme === 'dark'} onChange={handleToggle} />
                <span className='slider' />
            </label>
        </div>
    );
};
