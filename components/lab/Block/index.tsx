import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { USABLE_COLORS } from 'util/tailwind';
import styles from './index.module.scss';

interface BlockCSS extends React.CSSProperties {
    '--block-width': string;
    '--block-height': string;
    '--block-depth': string;
}

interface LabBlockProps {
    size: number;
    colorLevel: number;
}

const LabBlock: React.FC<LabBlockProps> = ({ size, colorLevel }) => {
    const isMouseCaptured = useRef<boolean>(false);

    const [blockStyle, setblockStyle] = useState<BlockCSS>();

    const [blockColors, setBlockColors] = useState<string[]>([]);

    useEffect(() => {
        setblockStyle({
            '--block-width': `${size}px`,
            '--block-height': `${size}px`,
            '--block-depth': `${size}px`
        });
    }, [size]);

    useEffect(() => {
        setBlockColors(USABLE_COLORS.map((i) => `bg-${i}-${colorLevel}`));
    }, [colorLevel]);

    const handleMouseDown = () => (isMouseCaptured.current = true);

    const handleMouseUp = () => (isMouseCaptured.current = false);

    const handleMouseMove = (e) => {
        if (!isMouseCaptured.current) return;

        const mx = e.pageX / window.innerWidth;
        const my = e.pageY / window.innerHeight;

        const dx = 45 - 90 * mx;
        const dy = 45 - 90 * my;

        setblockStyle({
            ...blockStyle,
            animation: 'none',
            transform: `translate(-50%, -50%) rotateY(${dx}deg) rotateX(${dy}deg)`
        });
    };

    return (
        <div
            className="relative w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            <div className={classnames('absolute inset-2/4', styles.block)} style={blockStyle}>
                {Array.from(new Array(6)).map((_, key) => (
                    <div
                        className={classnames(
                            'absolute',
                            blockColors[key % blockColors.length],
                            styles.side
                        )}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
};

export default LabBlock;
