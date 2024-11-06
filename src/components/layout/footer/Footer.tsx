import { FooterStyles } from '@layoutStyles';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={FooterStyles.Footer}>
            <p>
                &copy; {currentYear} <strong>Prototype</strong>. All rights
                reserved.
            </p>
        </footer>
    );
}
