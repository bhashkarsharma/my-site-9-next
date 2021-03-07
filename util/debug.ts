import { useEffect, useRef } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types,no-console */
export const useWhyDidComponentUpdate = (name: string, props: any): void => {
    const previousProps = useRef<any>();

    if (process.env.NODE_ENV === 'production') {
        console.warn('USING THIS HOOK IN PRODUCTION IS NOT ALLOWED');
    }

    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            const changesObj: any = {};

            allKeys.forEach((key) => {
                if (previousProps.current[key] !== props[key]) {
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key]
                    };
                }
            });

            if (Object.keys(changesObj).length) {
                console.log('[WhyDidComponentUpdate]', name, changesObj);
            }
        }

        previousProps.current = props;
    });
};
