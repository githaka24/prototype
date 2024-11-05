import { LogoStyles } from '@sharedStyles';
import Image from 'next/image';

export default function Logo({ width = 32, height = 32 }: LogoProps) {
    return (
        <div className={LogoStyles.Logo}>
            <Image
                src={'/logo.svg'}
                alt='Prototype Logo'
                width={width}
                height={height}
            />
        </div>
    );
}
