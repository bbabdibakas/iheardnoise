import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppHeader.module.scss';
import { ReactNode } from 'react';

interface AppHeaderProps {
    className?: string;
    children?: ReactNode;
}
export const AppHeader = (props: AppHeaderProps) => {
    const {
        className,
        children,
    } = props;
    return (
        <div className={classNames(cls.AppHeader, {}, [className])}>
            {children}
        </div>
    );
};