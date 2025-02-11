import { EvervaultCard } from '@/components/ui/evervault-card';

import { PlusIcon } from 'lucide-react';

export default function page() {
    return (
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]'>
                <PlusIcon className='absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white' />
                <PlusIcon className='absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white' />
                <PlusIcon className='absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white' />
                <PlusIcon className='absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white' />

                <EvervaultCard text='Welcome Dashboard' className='text-center' />

                <h2 className='mt-4 text-center text-lg text-black'>
                    Welcome to your dashboard! Explore your data and settings with ease.
                </h2>
            </div>
        </div>
    );
}
