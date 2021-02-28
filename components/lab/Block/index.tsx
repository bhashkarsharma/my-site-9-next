import classnames from 'classnames';
import styles from './index.module.scss';

import { TAILWIND_COLORS, EXCLUDED_COLORS } from 'util/tailwind';

interface BlockCSS extends React.CSSProperties {
    '--box-width': string;
    '--box-height': string;
    '--box-depth': string;
}

interface LabBlockProps {
    size: number;
    colorLevel: number;
}

const LabBlock: React.FC<LabBlockProps> = ({ size, colorLevel }) => {
    const boxStyles: BlockCSS = {
        '--box-width': `${size}px`,
        '--box-height': `${size}px`,
        '--box-depth': `${size}px`
    };

    const blockColors = TAILWIND_COLORS.filter((c) => !EXCLUDED_COLORS.includes(c)).map(
        (i) => `bg-${i}-${colorLevel}`
    );

    return (
        <div className="relative w-full h-full">
            <div className={classnames('absolute inset-2/4', styles.box)} style={boxStyles}>
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

// rotation possible with swipe/drag

export default LabBlock;
