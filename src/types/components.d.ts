import { ReactNode } from 'react';

declare global {
    interface LogoProps {
        width?: number;
        height?: number;
    }
    interface ContainerProps {
        children: ReactNode;
    }
}

export {};
