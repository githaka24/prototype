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
    interface ButtonProps {
        url: string;
        name: string;
    }
    interface NavigationLargeProps {
        children: ReactNode;
    }
    interface NavigationSmallProps {
        children: ReactNode;
    }
    interface ViewProps {
        id: string;
        children: ReactNode;
        style: string;
    }
    interface MainProps {
        children: ReactNode;
    }
}

export {};
