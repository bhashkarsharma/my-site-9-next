import PageHead from 'components/PageHead';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';
import LabBlock from 'components/lab/Block';

const Home: React.FC = () => {
    return (
        <div>
            <PageHead title="Not found" />

            <Background className="topography" />
            <div className="h-screen relative flex flex-col">
                <Header title="404" />
                <Container>
                    <div className="text-center font-bold">
                        We did not find what you are looking for.
                    </div>
                    <LabBlock size={200} colorLevel={400} />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
