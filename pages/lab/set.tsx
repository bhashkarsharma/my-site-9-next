import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';

import PageHead from 'components/PageHead';
import LabSet from 'components/lab/Set';

const Set: React.FC = () => {
    return (
        <div>
            <PageHead title="Set" />

            <Background className="" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Set" />
                <Container className="">
                    <LabSet />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default Set;
