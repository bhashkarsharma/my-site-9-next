import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(() => import('./P5Wrapper'), { ssr: false });

export default P5Wrapper;
