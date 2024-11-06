import { NavigationItemStyles } from '@layoutStyles';
import Link from 'next/link';

export default function NavigationItem({ url, name }: NavigationItemProps) {
    return (
        <div className={NavigationItemStyles.NavigationItem}>
            <Link href={url}>{name}</Link>
        </div>
    );
}
