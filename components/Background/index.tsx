import classnames from 'classnames';
import { ComponentProps } from '../../types/react';
import styles from './index.module.css';

const Background: React.FC<ComponentProps> = ({ className }) => (
    <div className={classnames('fixed h-full w-full bg-gray-100', styles[className])} />
);

export default Background;
