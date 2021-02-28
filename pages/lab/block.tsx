import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';

import PageHead from 'components/PageHead';
import LabBlock from 'components/lab/Block';
import { useState } from 'react';

const Block: React.FC = () => {
    const [size, setSize] = useState<number>(200);
    const [colorLevel, setColorLevel] = useState<number>(300);

    const handleSizeChange = (e) => setSize(e.target.value);

    const handleColorLevelChange = (e) => setColorLevel(e.target.value);

    return (
        <div>
            <PageHead title="Block" />

            <Background className="topography" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Block" />
                <Container className="">
                    Size:
                    <input
                        type="range"
                        min="100"
                        max="900"
                        step="50"
                        value={size}
                        onChange={handleSizeChange}
                    />
                    Color:
                    <input
                        type="range"
                        min="100"
                        max="900"
                        step="100"
                        value={colorLevel}
                        onChange={handleColorLevelChange}
                    />
                    <LabBlock size={size} colorLevel={colorLevel} />
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default Block;
