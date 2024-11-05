import Image from 'next/image';

export default function Logo({ width = 32, height = 32 }: LogoProps) {
    return (
        <div>
            <Image
                src={'/logo.svg'}
                alt='Prototype Logo'
                width={width}
                height={height}
            />
        </div>
    );
}
