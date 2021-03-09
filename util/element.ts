import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Dimensions } from 'types/element';

export const useIsMounted = (): React.MutableRefObject<boolean> => {
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
        isMounted.current = true;

        return (): void => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};

export const useElementSize = (element: React.RefObject<HTMLElement>): Dimensions => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const isMounted = useIsMounted();

    useLayoutEffect(() => {
        if (!element.current) {
            return;
        }

        const observedElement = element.current;

        setDimensions({
            width: observedElement.offsetWidth,
            height: observedElement.offsetHeight
        });

        const observer = new ResizeObserver((entries) => {
            if (!element.current || !isMounted.current) {
                return;
            }

            for (const entry of entries) {
                const { width, height } = entry.contentRect;

                setDimensions({
                    width,
                    height
                });
            }
        });

        observer.observe(observedElement);

        return (): void => {
            observer.unobserve(observedElement);
        };
    }, [element, isMounted]);

    return dimensions;
};
