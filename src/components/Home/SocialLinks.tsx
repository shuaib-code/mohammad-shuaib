import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg',
        alt: 'LinkedIn',
        width: 36,
        height: 36
    },
    {
        href: 'https://github.com/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
        alt: 'GitHub',
        width: 36,
        height: 36
    },
    {
        href: 'https://www.facebook.com/shuaib-code',
        src: 'https://cdn.worldvectorlogo.com/logos/facebook-2020-2-1.svg',
        alt: 'Facebook',
        width: 48,
        height: 48
    },
    {
        href: 'mailto:shuaib-cyclist@gmail.com',
        src: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-2.svg',
        alt: 'Gmail',
        width: 56,
        height: 46
    }
];

const SocialLinks = () => (
    <div className='mt-8 flex items-center gap-3'>
        {socialLinks.map((social) => (
            <Link key={social.href} href={social.href} target='_blank'>
                <Image
                    src={social.src}
                    alt={social.alt}
                    width={social.width}
                    height={social.height}
                    className='mr-2 object-contain'
                />
            </Link>
        ))}
    </div>
);

export default SocialLinks;
