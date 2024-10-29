import { ProfileDetails } from "entities/Profile"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const ProfilePage = () => {
    return (
        <div>
            <AppHeader>
                Profile
            </AppHeader>
            <ProfileDetails id={'1'} />
        </div>
    )
}
export default ProfilePage