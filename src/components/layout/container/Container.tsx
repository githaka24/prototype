import { ContainerStyles } from '@layoutStyles';

export default function Container({ children }: ContainerProps) {
    return <div className={ContainerStyles.Container}>{children}</div>;
}
