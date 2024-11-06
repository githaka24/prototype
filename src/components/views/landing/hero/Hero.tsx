import { View } from '@layout';
import { HeroStyles } from '@viewsStyles';
import Image from 'next/image';
import { sourceCodePro } from '@fontsVariable';
import { Button } from '@shared';
import { albertSans } from '@fontsHosted';

export default function Hero() {
    return (
        <View
            id='hero'
            style={HeroStyles.Hero}
        >
            <div className={HeroStyles.HeroImage}>
                <Image
                    src={'/images/landing/hero.jpg'}
                    alt='Hero Image'
                    width={800}
                    height={600}
                />
            </div>
            <div className={HeroStyles.HeroText}>
                <h1 className={albertSans.className}>
                    A Practical Guide to Next.js
                </h1>
                <h2 className={albertSans.className}>
                    Flexible Next.js with conventions for maintainability
                </h2>
                <p>
                    Prototype is a Next.js project with maintainable, scalable
                    conventions, demonstrating flexible solutions for long-term
                    growth.
                </p>
                <div className={HeroStyles.HeroLinks}>
                    <Button
                        url=''
                        name='Get Started'
                    />
                </div>
            </div>
        </View>
    );
}
