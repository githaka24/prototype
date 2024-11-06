import { HeaderStyles } from '@/exports/styles/layout';
import { Brand, Navigation } from '@layout';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}
