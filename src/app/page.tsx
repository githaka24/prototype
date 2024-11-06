import { Container, Footer, Header, Main, NavigationItem } from '@layout';
import { Button } from '@shared';

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
                <Main />
                <Footer />
            </Container>
        </>
    );
}
