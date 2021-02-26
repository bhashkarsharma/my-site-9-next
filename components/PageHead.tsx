import Head from 'next/head';

interface PageHeadProps {
    title?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title }) => (
    <Head>
        <title>{title && `${title} - `}Bhashkar Sharma</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
);

export default PageHead;
