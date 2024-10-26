import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import { authFormActions } from "../../model/slice/authFormSlice"
import cls from './AuthForm.module.scss'
import AppButton from "shared/ui/AppButton/AppButton"
import { getAuthFormUsername } from "../../model/selectors/getAuthFormUsername"
import { getAuthFormPassword } from "../../model/selectors/getAuthFormPassword"
import { getAuthFormErrorMessage } from "../../model/selectors/getAuthFormErrorMessage"
import { getAuthFormIsLoading } from "../../model/selectors/getAuthFormIsLoading"
import { authByUsername } from "../../model/services/authByUsername"

export const AuthForm = () => {
    const dispatch = useDispatch()
    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)
    const isLoading = useSelector(getAuthFormIsLoading)
    const errorMessage = useSelector(getAuthFormErrorMessage)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    const onLoginHandler = useCallback(() => {
        dispatch(authByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome back to Wavion
            </div>
            <div>
                {isLoading && 'Loading'}
            </div>
            <div>
                {errorMessage}
            </div>
            <AppInput value={username} onChange={onChangeUsername} placeholder="Username" className={cls.input} />
            <AppInput value={password} onChange={onChangePassword} placeholder="Password" className={cls.input} />
            <AppButton className={cls.button} onClick={onLoginHandler}>
                Login
            </AppButton>
        </div>
    )
}