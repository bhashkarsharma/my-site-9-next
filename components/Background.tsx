import classnames from 'classnames';
import { ComponentProps } from '../types/react';

const Background: React.FC<ComponentProps> = ({ className }) => (
    <div className={classnames('absolute h-full w-full bg-gray-100', className)} />
);

export default Background;
