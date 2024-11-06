import { Container, Footer, Header, Main, NavigationItem } from '@layout';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Landing'
                />
                <NavigationItem
                    url=''
                    name='Docs'
                />
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </>
    );
}
