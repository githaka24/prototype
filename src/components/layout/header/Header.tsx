import { HeaderStyles } from '@/exports/styles/layout';
import { Brand, Navigation } from '@layout';

export default function Header() {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Navigation />
        </header>
    );
}
