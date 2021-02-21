import classnames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

import { ComponentProps } from '../types/react';
import NavList from './Nav';

const Header: React.FC<ComponentProps> = ({ className }) => {
    const [isClosed, setClosed] = useState<boolean>(false);

    const onMenuToggle = () => {
        setClosed(!isClosed);
    };
    return (
        <div
            className={classnames(
                'flex m-4 py-4 px-6 flex-col sm:flex-row',
                'rounded-xl shadow',
                'bg-gray-600 text-white',
                className
            )}>
            <div className="flex-grow flex flex-row">
                <Link href="/">
                    <Logo className="flex-grow" />
                </Link>

                <div
                    role="button"
                    tabIndex={0}
                    className={classnames(
                        'flex-initial float-right tham tham-e-squeeze tham-w-8 sm:hidden',
                        {
                            'tham-active': !isClosed
                        }
                    )}
                    onClick={onMenuToggle}
                    onKeyPress={onMenuToggle}>
                    <div className="tham-box">
                        <div className="tham-inner bg-white" />
                    </div>
                </div>
            </div>

            <nav
                className={classnames('flex-grow', {
                    hidden: isClosed
                })}>
                <NavList />
            </nav>
        </div>
    );
};

export default Header;
