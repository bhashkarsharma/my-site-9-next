import { useEffect, useState } from 'react';
import jumble from 'util/string';
import { useInterval } from './time';

interface JumbleEffectProps {
    original: string;
    duration?: number;
    iterations?: number;
    resetter?: number;
}

export const useJumbleEffect = ({
    original,
    duration = 1000,
    iterations = 10,
    resetter
}: JumbleEffectProps): string => {
    const [jumbled, setJumbled] = useState<string>(original);
    const [shuffleCount, setShuffleCount] = useState<number>(iterations);
    const delay = duration / iterations;

    useEffect(() => {
        setShuffleCount(iterations);
    }, [resetter]);

    useInterval(() => {
        if (shuffleCount < 0) {
            return;
        }

        setJumbled(jumble(jumbled));
        setShuffleCount(shuffleCount - 1);

        if (shuffleCount === 0) {
            setJumbled(original);
        }
    }, delay);

    return jumbled;
};

export const useJumbleOnMouseEvent = ({
    original,
    iterations,
    duration
}: JumbleEffectProps): [string, VoidFunction] => {
    const [resetter, updateResetter] = useState(0);
    const onMouseEvent = (): void => updateResetter(resetter + 1);

    const label = useJumbleEffect({
        original,
        iterations,
        duration,
        resetter
    });

    return [label, onMouseEvent];
};
