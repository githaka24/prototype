import { MainStyles } from '@layoutStyles';

export default function Main({ children }: MainProps) {
    return <main className={MainStyles.Main}>{children}</main>;
}
