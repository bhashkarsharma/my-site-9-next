import classnames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

import { ComponentProps } from '../types/react';
import NavList from './Nav';

interface HeaderProps extends ComponentProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
    const [isClosed, setClosed] = useState<boolean>(false);

    const onMenuToggle = () => {
        setClosed(!isClosed);
    };
    return (
        <div
            className={classnames(
                'flex m-4 py-2 px-4 flex-col sm:flex-row sm:items-center',
                'rounded-xl shadow',
                'bg-gray-600 text-white',
                className
            )}>
            <div className="flex-1 flex flex-row">
                <Link href="/">
                    <Logo title={title} className="flex-grow" />
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
                className={classnames('flex-1', {
                    hidden: isClosed
                })}>
                <NavList />
            </nav>
        </div>
    );
};

export default Header;
