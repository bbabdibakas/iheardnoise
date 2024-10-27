import AppLink from 'shared/ui/AppLink/AppLink'
import cls from './SidebarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItemType } from '../../model/types/SidebarItemType'

interface SidebarItemProps {
    item: SidebarItemType,
    location: string,
    className?: string
}

const SidebarItem = (props: SidebarItemProps) => {
    const {
        item,
        location,
        className
    } = props
    
    return (
        <AppLink to={item.path} className={classNames(cls.SidebarItem, {}, [className])}>
            {location === item.path ? <item.activeIcon /> : <item.icon />}
            <div className={cls.label}>
                {item.label}
            </div>
        </AppLink>
    )
}

export default SidebarItem