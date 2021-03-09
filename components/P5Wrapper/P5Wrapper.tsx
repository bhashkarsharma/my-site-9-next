import p5 from 'p5';
import { useEffect, useRef } from 'react';
import { P5Sketch } from 'types/p5';
import { useElementSize } from 'util/element';

interface P5WrapperProps {
    sketch: P5Sketch;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
    const ref = useRef<HTMLDivElement>();
    const p5Instance = useRef<p5>();

    const size = useElementSize(ref);

    useEffect(() => {
        if (size.width === 0) return;

        p5Instance.current = new p5(sketch(size), ref.current);

        return () => {
            p5Instance.current.remove();
        };
    }, [size]);

    return <div className="w-full h-full text-center m-2" ref={ref}></div>;
};

export default P5Wrapper;
