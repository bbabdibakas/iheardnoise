import { getUserData, userActions } from "entities/User"
import { AuthModal } from "features/AuthByUsername"
import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import AppButton from "shared/ui/AppButton/AppButton"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const userData = useSelector(getUserData)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }
    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const onLogoutHandler = useCallback(() => {
        dispatch(userActions.resetUserData())
    }, [dispatch])

    if (userData) {
        return (
            <div>
                <AppHeader>
                    <AppButton onClick={onLogoutHandler}>
                        Logout
                    </AppButton>
                </AppHeader>
                MainPage
            </div>
        )
    }

    return (
        <div>
            <AppHeader>
                <AppButton onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            {
                isModalOpen && <AuthModal isOpen={isModalOpen} onClose={onModalClose} />
            }
            MainPage
        </div>
    )
}
export default MainPage