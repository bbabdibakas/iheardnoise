import { Link, LinkProps } from "react-router-dom"
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={`${cls.AppLink} ${className}`}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink