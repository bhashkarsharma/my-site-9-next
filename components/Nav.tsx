import classnames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { ComponentProps } from '../types/react';

interface NavItemProps extends ComponentProps {
    href: string;
}

const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(({ href, children }, ref) => (
    <Link href={href}>
        <li
            ref={ref}
            className={classnames(
                'flex-1 py-2 sm:px-2 sm:text-center sm:border-l-0',
                'transition cursor-pointer',
                'text-gray-300 border-gray-400',
                'group-hover:border-gray-600 hover:bg-gray-700 hover:text-white'
            )}>
            {children}
        </li>
    </Link>
));

NavItem.displayName = 'NavItem';

const NavList = (): React.ReactElement => (
    <ul className="flex-col group sm:flex sm:flex-row">
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/lab">Lab</NavItem>
        <NavItem href="/talks">Talks</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/">Resume</NavItem>
    </ul>
);

export default NavList;
