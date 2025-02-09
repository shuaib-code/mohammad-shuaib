import { Contact, Facebook, Instagram, Linkedin, Mail, MapPinCheckIcon, Youtube } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
            <div className='w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl'>
                <div className='grid md:grid-cols-2'>
                    {/* Left Section */}
                    <div className='flex flex-col justify-center bg-indigo-600 p-8 text-white'>
                        <h2 className='mb-4 text-3xl font-semibold'>Get In Touch</h2>
                        <p className='mb-6 text-gray-200'>
                            Feel free to contact us! Submit your queries here, and we will get back to you as soon as
                            possible.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-3'>
                                <Contact />
                                <span>470-601-1911</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail />
                                <span>Pagedone1234@gmail.com</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <MapPinCheckIcon />
                                <span>789 Oak Lane, Lakeside, TX 54321</span>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className='mt-6 flex space-x-4'>
                            <Facebook className='cursor-pointer text-2xl hover:text-gray-300' />
                            <Instagram className='cursor-pointer text-2xl hover:text-gray-300' />
                            <Linkedin className='cursor-pointer text-2xl hover:text-gray-300' />
                            <Youtube className='cursor-pointer text-2xl hover:text-gray-300' />
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className='flex flex-col justify-center p-8'>
                        <h3 className='mb-4 text-2xl font-semibold'>Send Us a Message</h3>
                        <form className='space-y-4'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            />
                            <textarea
                                placeholder='Message'
                                rows={4}
                                className='w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none'></textarea>
                            <button className='w-full rounded-lg bg-indigo-600 p-3 text-lg font-semibold text-white hover:bg-indigo-700'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
