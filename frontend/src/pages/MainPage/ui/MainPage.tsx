import { AuthModal } from "features/AuthByUsername"
import { useState } from "react"
import AppButton from "shared/ui/AppButton/AppButton"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }
    const onModalClose = () => {
        setIsModalOpen(false)
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