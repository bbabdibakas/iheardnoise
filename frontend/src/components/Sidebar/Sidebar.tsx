import AppLink from '../AppLink/AppLink'
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={cls.Sidebar}>
            <div className={cls.links}>
                <AppLink to='/' className={cls.link}>
                    main
                </AppLink>
                <AppLink to='/profile' className={cls.link}>
                    profile
                </AppLink>
            </div>
        </div>
    )
}

export default Sidebar