import { NavigationLarge, NavigationSmall } from '@layout';
import { NavigationStyles } from '@layoutStyles';

export default function Navigation({ children }: NavigationProps) {
    return (
        <div className={NavigationStyles.Navigation}>
            <NavigationLarge>{children}</NavigationLarge>
            <NavigationSmall>{children}</NavigationSmall>
        </div>
    );
}
