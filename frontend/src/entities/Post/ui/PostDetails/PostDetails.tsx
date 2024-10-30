import { useSelector } from "react-redux"
import cls from './PostDetails.module.scss'
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { classNames } from "shared/lib/classNames/classNames"
import { useEffect } from "react"
import { getPostData } from "../../model/selectors/getPostData"
import { getPostIsLoading } from "../../model/selectors/getPostIsLoading"
import { getPostErrorMessage } from "../../model/selectors/getPostErrorMessage"
import { fetchPostData } from "../../model/services/fetchPostData"

interface PostDetailsProps {
    id: string
}

export const PostDetails = ({ id }: PostDetailsProps) => {
    const dispatch = useAppDispatch()
    const postData = useSelector(getPostData)
    const isLoading = useSelector(getPostIsLoading)
    const errorMessage = useSelector(getPostErrorMessage)

    useEffect(() => {
        dispatch(fetchPostData(id));
    }, [dispatch]);

    let content

    if (isLoading) {
        content = (
            <div className={classNames(cls.PostDetails, {}, [cls.loadingOrHasError])}>
                <AppPageLoader />
            </div>
        )
    } else if (errorMessage) {
        content = (
            <div className={classNames(cls.PostDetails, {}, [cls.loadingOrHasError])}>
                {errorMessage}
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.PostDetails, {}, [])}>
                <div className={cls.author}>
                    <div className={cls.name}>
                        {postData?.profile.name}
                    </div>
                    <div className={cls.username}>
                        {'@' + postData?.profile.username}
                    </div>
                </div>
                <div className={cls.content}>
                    {postData?.content}
                </div>
            </div>
        )
    }

    return content
}