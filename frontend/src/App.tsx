import { Link, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"

const App = () => {
    return (
        <div className={'app'}>
            <div>
                <Link to={'/'}>main</Link>
                <Link to={'/profile'}>profile</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App