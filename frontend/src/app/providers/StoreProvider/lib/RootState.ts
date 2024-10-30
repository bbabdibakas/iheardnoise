import { PostState } from "entities/Post";
import { ProfileState } from "entities/Profile";
import { UserState } from "entities/User";
import { AuthFormState } from "features/AuthByUsername";

export interface RootState {
    authForm: AuthFormState
    user: UserState
    profile: ProfileState
    post: PostState
}