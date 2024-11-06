import { ReactNode } from 'react';

declare global {
    interface LogoProps {
        width?: number;
        height?: number;
    }
    interface ContainerProps {
        children: ReactNode;
    }
    interface NavigationItemProps {
        url: string;
        name: string;
        active?: boolean;
    }
    interface HeaderProps {
        children: ReactNode;
    }
    interface NavigationProps {
        children: ReactNode;
    }
}

export {};
