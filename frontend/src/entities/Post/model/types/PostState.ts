import { Profile } from "entities/Profile"

export interface Post {
    id: string
    profile: Profile
    content: string
}

export interface PostState {
    postData?: Post
    isLoading: boolean
    errorMessage?: string
}