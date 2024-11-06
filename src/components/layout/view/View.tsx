import { ViewStyles } from '@viewsStyles';

export default function View({ id, children, style }: ViewProps) {
    return (
        <section
            id={id}
            className={[ViewStyles.View, style].join(' ')}
        >
            {children}
        </section>
    );
}
