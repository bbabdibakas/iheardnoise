import AppLink from 'shared/ui/AppLink/AppLink'
import cls from './Sidebar.module.scss'
import { routePath } from 'app/providers/AppRouter'

const Sidebar = () => {
    return (
        <div className={cls.Sidebar}>
            <div className={cls.links}>
                <AppLink to={routePath.main} className={cls.link}>
                    main
                </AppLink>
                <AppLink to={routePath.profile} className={cls.link}>
                    profile
                </AppLink>
            </div>
        </div>
    )
}

export default Sidebar