import classnames from 'classnames';
import { useJumbleOnMouseEvent } from 'hooks/string';
import Link from 'next/link';
import React from 'react';
import { ComponentProps } from '../types/react';

interface NavItemProps extends ComponentProps {
    href?: string;
    label?: string;
}

const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(({ href, label, children }, ref) => {
    const [jumbledLabel, onMouseOver] = useJumbleOnMouseEvent({
        original: label,
        duration: 100
    });

    return (
        <Link href={href}>
            <li
                ref={ref}
                className={classnames(
                    'flex-1 py-2 sm:px-2 sm:text-center sm:border-l-0',
                    'transition cursor-pointer',
                    'text-gray-300 border-gray-400',
                    'group-hover:border-gray-600 hover:bg-gray-700 hover:text-white'
                )}
                onMouseOver={onMouseOver}>
                {jumbledLabel || children}
            </li>
        </Link>
    );
});

NavItem.displayName = 'NavItem';

const NavList = (): React.ReactElement => (
    <ul className="flex-col group sm:flex sm:flex-row">
        <NavItem href="/" label="Home" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="/lab" label="Lab" />
        <NavItem href="/talks" label="Talks" />
        <NavItem href="/about" label="About" />
        <NavItem href="/" label="Resume" />
    </ul>
);

export default NavList;
