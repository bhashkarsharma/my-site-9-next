import classnames from 'classnames';
import Head from 'next/head';
import slugify from 'util/url';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Background from 'components/Background';
import Link from 'next/link';

interface LabProps {
    pages: { title: string; url: string }[];
}

const Lab: React.FC<LabProps> = ({ pages }) => {
    return (
        <div className="">
            <Head>
                <title>Lab - Bhashkar Sharma</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Background className="topography" />
            <div className="h-screen relative flex flex-col justify-between">
                <Header title="Lab" />
                <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {pages.map(({ title, url }) => (
                        <Link href={`/lab/${url}`} key={title}>
                            <div
                                className={classnames(
                                    'flex justify-center items-center p-4 rounded-xl',
                                    'text-6xl font-black',
                                    'bg-transparent',
                                    'hover:bg-gray-500 hover:bg-opacity-50',
                                    'transition cursor-pointer'
                                )}>
                                <div
                                    className={classnames(
                                        'bg-clip-text text-transparent',
                                        'bg-gradient-to-t from-gray-500 to-gray-800'
                                    )}>
                                    {title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export const getStaticProps = (): { props: LabProps } => {
    const labPages = ['Blocks', 'Digilog', 'Helvetica', 'Particles', 'Set', 'Snake', 'Vinyl'];
    return {
        props: {
            pages: labPages.map((page) => ({ title: page, url: slugify(page) }))
        }
    };
};

export default Lab;
