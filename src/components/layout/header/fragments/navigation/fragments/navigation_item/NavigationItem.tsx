import { NavigationItemStyles } from '@layoutStyles';
import Link from 'next/link';

export default function NavigationItem({
    url,
    name,
    active,
}: NavigationItemProps) {
    return (
        <div
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
        >
            <Link
                href={url}
                scroll={false}
            >
                {name}
            </Link>
        </div>
    );
}
