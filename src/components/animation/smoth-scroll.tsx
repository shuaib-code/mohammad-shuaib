'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        let scrollTimeout: string | number | NodeJS.Timeout | null | undefined = null;

        const scrollHandler = (e: { deltaY: number }) => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

            scrollTimeout = setTimeout(() => {
                const sections = document.querySelectorAll('section');
                let currentSectionIndex = 0;

                sections.forEach((section, index) => {
                    if (section.getBoundingClientRect().top <= 0) {
                        currentSectionIndex = index;
                    }
                });

                if (scrollDirection === 'down' && currentSectionIndex < sections.length - 1) {
                    // Scroll to the next section
                    sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
                } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
                    // Scroll to the previous section
                    sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);
        };

        window.addEventListener('wheel', scrollHandler, { passive: true });

        return () => {
            window.removeEventListener('wheel', scrollHandler);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    return null;
};

export default SmoothScroll;
