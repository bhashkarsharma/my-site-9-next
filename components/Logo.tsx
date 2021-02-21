import classnames from 'classnames';
import React from 'react';
import { ComponentProps } from '../types/react';

interface LogoProps extends ComponentProps {
    title?: string;
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({ title, className }, ref) => (
    <div className={classnames('flex', className)} ref={ref}>
        <div className="flex-grow text-xl truncate">
            {title || (
                <>
                    <span className="font-bold">B</span>
                    <span className="font-light mr-2">HASHKAR</span>
                    <span className="font-bold">S</span>
                    <span className="font-light">HARMA</span>
                </>
            )}
        </div>
    </div>
));

Logo.displayName = 'Logo';

export default Logo;
