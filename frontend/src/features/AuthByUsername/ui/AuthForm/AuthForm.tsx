import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import { authFormActions } from "../../model/slice/authFormSlice"
import cls from './AuthForm.module.scss'
import AppButton from "shared/ui/AppButton/AppButton"
import { getAuthFormUsername } from "../../model/selectors/getAuthFormUsername"
import { getAuthFormPassword } from "../../model/selectors/getAuthFormPassword"

export const AuthForm = () => {
    const dispatch = useDispatch()
    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    const onSubmit = () => {
        console.log({ username, password })
    }

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome back to Wavion
            </div>
            <AppInput value={username} onChange={onChangeUsername} placeholder="Username" className={cls.input} />
            <AppInput value={password} onChange={onChangePassword} placeholder="Password" className={cls.input} />
            <AppButton className={cls.button} onClick={onSubmit}>
                Login
            </AppButton>
        </div>
    )
}