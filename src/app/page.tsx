import { Container, Footer, Header, Main, NavigationItem } from '@layout';
import { Button } from '@shared';
import { Hero } from '@views';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Landing'
                    active
                />
                <NavigationItem
                    url=''
                    name='Docs'
                />
                <Button
                    url=''
                    name='Sign In'
                />
            </Header>
            <Container>
                <Main>
                    <Hero />
                </Main>
                <Footer />
            </Container>
        </>
    );
}
