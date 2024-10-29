import { useSelector } from "react-redux"
import cls from './ProfileDetails.module.scss'
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { classNames } from "shared/lib/classNames/classNames"
import { getProfileData } from "../../model/selectors/getProfileData"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading"
import { getProfileErrorMessage } from "../../model/selectors/getProfileErrorMessage"
import { fetchProfileData } from "../../model/services/fetchProfileData"
import { useEffect } from "react"

interface ProfileDetailsProps {
    id: string
}

export const ProfileDetails = ({ id }: ProfileDetailsProps) => {
    const dispatch = useAppDispatch()
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const errorMessage = useSelector(getProfileErrorMessage)

    useEffect(() => {
        dispatch(fetchProfileData(id));
    }, [dispatch]);

    let content

    if (isLoading) {
        content = (
            <div className={classNames(cls.ProfileDetails, {}, [cls.loadingOrHasError])}>
                <AppPageLoader />
            </div>
        )
    } else if (errorMessage) {
        content = (
            <div className={classNames(cls.ProfileDetails, {}, [cls.loadingOrHasError])}>
                {errorMessage}
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.ProfileDetails, {}, [])}>
                <div>
                    {profileData?.name}
                </div>
                <div>
                    {profileData?.username}
                </div>
                <div>
                    {profileData?.bio}
                </div>
            </div>
        )
    }

    return content
}