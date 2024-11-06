import { NavigationLargeStyles } from '@layoutStyles';

export default function NavigationLarge({ children }: NavigationLargeProps) {
    return (
        <div className={NavigationLargeStyles.NavigationLarge}>{children}</div>
    );
}
