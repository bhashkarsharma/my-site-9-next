import PageHead from 'components/PageHead';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';

const Home: React.FC = () => {
    return (
        <div>
            <PageHead />

            <Background className="topography" />
            <div className="h-screen relative flex flex-col">
                <Header />
                <Container />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
