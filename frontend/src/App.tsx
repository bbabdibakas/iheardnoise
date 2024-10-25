import { Link, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"

const App = () => {
    return (
        <div>
            <Link to={'/'}>main</Link>
            <Link to={'/profile'}>profile</Link>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    )
}

export default App