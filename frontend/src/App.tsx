import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
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