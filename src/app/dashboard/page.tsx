import SignOutBtn from '@/components/auth/sign-out';
import { Button } from '@/components/ui/button';

import { FileText, Home, Menu, Settings, X } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className='flex h-screen bg-gray-100'>
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-64 transform border-r bg-white p-5 shadow-lg transition-transform md:relative md:translate-x-0 ${'-translate-x-64'}`}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold'>Dashboard</h2>
                    <Button variant='ghost' size='icon' className='md:hidden'>
                        <X className='h-6 w-6' />
                    </Button>
                </div>
                <nav className='mt-6'>
                    <a href='#' className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-200'>
                        <Home className='h-5 w-5' /> Home
                    </a>
                    <a href='#' className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-200'>
                        <FileText className='h-5 w-5' /> Reports
                    </a>
                    <a href='#' className='flex items-center gap-3 rounded-lg p-3 hover:bg-gray-200'>
                        <Settings className='h-5 w-5' /> Settings
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className='flex flex-1 flex-col'>
                {/* Top Navbar */}
                <header className='flex items-center justify-between bg-white p-4 shadow'>
                    <Button variant='ghost' size='icon' className='md:hidden'>
                        <Menu className='h-6 w-6' />
                    </Button>
                    <h2 className='text-lg font-medium'>Dashboard</h2>
                    <SignOutBtn />
                </header>

                {/* Content Area */}
                <main className='grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='rounded-xl bg-white p-6 shadow'>Card 1</div>
                    <div className='rounded-xl bg-white p-6 shadow'>Card 2</div>
                    <div className='rounded-xl bg-white p-6 shadow'>Card 3</div>
                </main>
            </div>
        </div>
    );
}
