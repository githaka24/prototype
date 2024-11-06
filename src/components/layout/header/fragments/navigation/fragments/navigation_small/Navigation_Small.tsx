'use client';
import { useState, useEffect } from 'react';
import { NavigationSmallStyles } from '@layoutStyles';
import Image from 'next/image';

export default function NavigationSmall({ children }: NavigationSmallProps) {
    const [navigation, setNavigation] = useState<boolean>(false);
    function triggerNavigation() {
        setNavigation(!navigation);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 769) {
                setNavigation(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={NavigationSmallStyles.NavigationSmall}>
            <div
                className={NavigationSmallStyles.NavigationSmallTrigger}
                onClick={triggerNavigation}
            >
                {navigation ? (
                    <Image
                        src={'/icons/close.svg'}
                        alt='Close Navigation Icon'
                        width={16}
                        height={16}
                    />
                ) : (
                    <Image
                        src={'/icons/open.svg'}
                        alt='Open Navigation Icon'
                        width={16}
                        height={16}
                    />
                )}
            </div>
            {navigation ? (
                <div
                    className={NavigationSmallStyles.NavigationSmallNavigation}
                >
                    {children}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
