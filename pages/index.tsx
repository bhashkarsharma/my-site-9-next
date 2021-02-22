import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Background from '../components/Background';

const Home: React.FC = () => {
    return (
        <div className="">
            <Head>
                <title>Bhashkar Sharma</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
