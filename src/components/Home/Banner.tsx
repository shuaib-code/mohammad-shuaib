import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/pp1.png';
import { cn } from '@/lib/utils';

import { GridPattern } from '../magicui/grid-pattern';
import { Cover } from '../ui/cover';

export default function Banner() {
    return (
        <div className='relative mx-auto max-w-[85rem] space-y-8 px-4 py-16 sm:px-6 lg:px-8'>
            <div className='flex justify-center'>
                <div className='grid items-center justify-center gap-5'>
                    <Image
                        src={Logo}
                        width={150}
                        height={150}
                        alt='Mohammad Shuaib'
                        className='mx-auto rounded-full border-4 border-[#ffcd42] shadow-xl'
                    />
                    <div className='mt-3 text-2xl font-semibold text-gray-700'>
                        Hi ! I am <Cover> Mohammad Shuaib </Cover>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-3xl text-center'>
                <h1 className='block text-4xl font-medium text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl'>
                    Crafting Scalable and Modern Web Experiences
                </h1>
            </div>

            <div className='mx-auto max-w-3xl text-center'>
                <p className='text-base font-light text-[#222222]'>
                    With expertise in full-stack development, I create seamless user experiences, ensuring speed,
                    security and responsiveness. Whether it's dynamic web apps, interactive UIs, or efficient backend
                    solutions, I deliver cutting-edge solutions that drive engagement and conversions.
                </p>
            </div>

            <div className='text-center'>
                <Link
                    href='/contact'
                    className='cinline-flex z-10 items-center justify-center gap-x-3 rounded-full border border-transparent bg-[#222222] px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent'>
                    Contact Me
                </Link>
            </div>
            <GridPattern
                squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                    [10, 10],
                    [12, 15],
                    [15, 10],
                    [10, 15]
                ]}
                className={cn(
                    '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                    'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
                )}
            />
        </div>
    );
}
