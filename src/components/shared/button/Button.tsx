import { ButtonStyles } from '@sharedStyles';
import Link from 'next/link';

export default function Button({ url, name }: ButtonProps) {
    return (
        <div className={ButtonStyles.Button}>
            <Link
                href={url}
                scroll={false}
            >
                {name}
            </Link>
        </div>
    );
}
