import { userActions } from "entities/User"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { Sidebar } from "widgets/Sidebar"
import { AppRouter } from "./providers/AppRouter"

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])


    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App