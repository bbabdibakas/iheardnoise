export interface Profile {
    id: string
    username: string
    name: string
    bio: string
}

export interface ProfileState {
    profileData?: Profile
    isLoading: boolean
    errorMessage?: string
}