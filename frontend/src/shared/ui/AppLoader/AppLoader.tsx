import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = (props: AppLoaderProps) => {
    const {
        className,
    } = props;


    return (
        <div className={classNames(cls.AppLoader, {}, [className])} />
    );
};