import { userActions } from "entities/User"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { Sidebar } from "widgets/Sidebar"

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])


    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <Sidebar />
                <div className={'content'}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App