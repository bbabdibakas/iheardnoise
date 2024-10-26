import { ButtonHTMLAttributes } from "react"
import cls from './AppButton.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props
    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
export default AppButton