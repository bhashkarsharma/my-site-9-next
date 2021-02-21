import classnames from 'classnames';
import React from 'react';
import { ComponentProps } from '../types/react';

const Logo = React.forwardRef<HTMLDivElement, ComponentProps>(({ className }, ref) => (
    <div className={classnames('flex', className)} ref={ref}>
        <div className="flex-grow text-xl">
            <span className="font-bold">B</span>
            <span className="font-light mr-2">HASHKAR</span>
            <span className="font-bold">S</span>
            <span className="font-light">HARMA</span>
        </div>
    </div>
));

Logo.displayName = 'Logo';

export default Logo;
