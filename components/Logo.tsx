import classnames from 'classnames';
import React, { useState } from 'react';
import { useInterval } from 'hooks/time';
import jumble from '../util/string';
import { ComponentProps } from '../types/react';
import { useJumbleEffect } from 'hooks/string';

interface LogoProps extends ComponentProps {
    title?: string;
}

const FIRST = 'HASHKAR';
const LAST = 'HARMA';

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({ title, className }, ref) => {
    const first = useJumbleEffect({ original: FIRST });
    const last = useJumbleEffect({ original: LAST });

    return (
        <div className={classnames('flex', className)} ref={ref}>
            <div className="flex-grow text-xl truncate">
                {title && `${title} - `}
                <span className="font-bold">B</span>
                <span className="font-light mr-2">{first}</span>
                <span className="font-bold">S</span>
                <span className="font-light">{last}</span>
            </div>
        </div>
    );
});

Logo.displayName = 'Logo';

export default Logo;
