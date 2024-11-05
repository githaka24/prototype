import { BrandStyles } from '@layoutStyles';
import { Logo } from '@shared';

export default function Brand() {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>Prototype</p>
        </div>
    );
}
