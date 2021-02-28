import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';

import PageHead from 'components/PageHead';
import LabHelvetica from 'components/lab/Helvetica';

const Helvetica: React.FC = () => {
    return (
        <div>
            <PageHead title="Helvetica" />

            <Background className="" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Helvetica" />
                <Container className="">
                    <LabHelvetica />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default Helvetica;
