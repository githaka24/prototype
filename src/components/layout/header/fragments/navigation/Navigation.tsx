import { NavigationStyles } from '@layoutStyles';

export default function Navigation({ children }: NavigationProps) {
    return <div className={NavigationStyles.Navigation}>{children}</div>;
}
