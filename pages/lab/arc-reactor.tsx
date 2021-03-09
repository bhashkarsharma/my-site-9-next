import Background from 'components/Background';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import arcReactor from 'components/lab/sketches/arcReactor';
import P5Wrapper from 'components/P5Wrapper';
import PageHead from 'components/PageHead';

const ArcReactor: React.FC = () => {
    return (
        <div>
            <PageHead title="Arc Reactor" />

            <Background className="" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Arc Reactor" />
                <Container className="">
                    <P5Wrapper sketch={arcReactor} />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default ArcReactor;
