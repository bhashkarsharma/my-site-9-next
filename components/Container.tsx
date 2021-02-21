import classnames from 'classnames';
import { ComponentProps } from '../types/react';

const Container: React.FC<ComponentProps> = ({ className, children }) => (
    <div className={classnames('p-10 flex-1', className)}>{children}</div>
);

export default Container;
