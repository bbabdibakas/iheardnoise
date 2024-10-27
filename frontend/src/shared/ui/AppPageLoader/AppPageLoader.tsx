import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppPageLoader.module.scss';
import { AppLoader } from '../AppLoader/AppLoader';

interface AppPageLoaderProps {
    className?: string;
}

export const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className,
    } = props;


    return (
        <div className={classNames(cls.AppPageLoader, {}, [className])}>
            <AppLoader />
        </div>
    );
};