import classnames from 'classnames';

import { Card, CardCount, CardFill, CardShape } from 'types/set';

const Diamond: React.FC<React.SVGAttributes<SVGElement>> = ({ width, height, fill, color }) => (
    <svg viewBox="0 0 20 30" width={width} height={height}>
        <path
            d="
            M 10 1 
            L 18 15 
            L 10 28 
            L 1 15 z"
            fill={fill === 'shaded' ? `url(#${color}lines)` : fill}
            stroke={color}
        />
        <pattern id={`${color}lines`} width="20" height="2" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke={color} />
        </pattern>
    </svg>
);

const Pill: React.FC<React.SVGAttributes<SVGElement>> = ({ width, height, fill, color }) => (
    <svg viewBox="0 0 20 30" width={width} height={height}>
        <rect
            width="18"
            height="28"
            x="1"
            y="1"
            rx="10"
            ry="10"
            fill={fill === 'shaded' ? `url(#${color}lines)` : fill}
            stroke={color}
        />
        <pattern id={`${color}lines`} width="20" height="2" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke={color} />
        </pattern>
    </svg>
);

const Squiggle: React.FC<React.SVGAttributes<SVGElement>> = ({ width, height, fill, color }) => (
    <svg viewBox="0 0 20 30" width={width} height={height}>
        <polygon
            points="8,1 1,28 18,28"
            fill={fill === 'shaded' ? `url(#${color}lines)` : fill}
            stroke={color}
        />
        <pattern id={`${color}lines`} width="20" height="2" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke={color} />
        </pattern>
    </svg>
);

const countMap = Object.keys(CardCount);

export interface CardViewProps {
    card: Card;
    selected: boolean;
    className?: string;
    onSelect?: () => void;
}

const CardView: React.FC<CardViewProps> = ({ card, selected, className, onSelect }) => {
    const { shape, fill, count } = card;
    const color = card.color.toLowerCase();

    const icons = {
        [CardShape.DIAMOND]: Diamond,
        [CardShape.PILL]: Pill,
        [CardShape.SQUIGGLE]: Squiggle
    };

    const svgFill = {
        [CardFill.EMPTY]: 'none',
        [CardFill.SOLID]: color,
        [CardFill.SHADED]: 'shaded'
    };
    const Icon = icons[shape];

    return (
        <div
            className={classnames(
                `flex rounded-xl flex-row border-gray-400 border-2 shadow-md px-4`,
                'transform transition-all duration-200 ease-out',
                { 'scale-90': selected },
                className
            )}
            onClick={onSelect}>
            {Array.from(new Array(countMap.indexOf(count) + 1)).map((_, k) => (
                <div className="text-lg m-auto" key={k}>
                    <Icon width={50} height={75} fill={svgFill[fill]} color={color} />
                </div>
            ))}
        </div>
    );
};

export default CardView;
