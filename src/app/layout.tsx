import '@/styles/global/global.css';
import type { Metadata } from 'next';
import { workSans } from '@fontsVariable';

export const metadata: Metadata = {
    title: 'Prototype',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
