import Background from 'components/Background';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import fractalTree from 'components/lab/sketches/fractalTree';
import P5Wrapper from 'components/P5Wrapper';
import PageHead from 'components/PageHead';

const FractalTree: React.FC = () => {
    return (
        <div>
            <PageHead title="Fractal Tree" />

            <Background className="" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Fractal Tree" />
                <Container className="">
                    <P5Wrapper sketch={fractalTree} />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default FractalTree;
