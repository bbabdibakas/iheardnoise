import { PostDetails } from "entities/Post"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const PostPage = () => {
    return (
        <div>
            <AppHeader>
                Post
            </AppHeader>
            <PostDetails id={'1'} />
        </div>
    )
}
export default PostPage