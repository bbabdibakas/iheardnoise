import AppButton from "shared/ui/AppButton/AppButton"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {

    const onClickHandler = () => {
        console.log('Hello, World!')
    }
    
    return (
        <div>
            <AppHeader>
                <AppButton onClick={onClickHandler}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
        </div>
    )
}
export default MainPage