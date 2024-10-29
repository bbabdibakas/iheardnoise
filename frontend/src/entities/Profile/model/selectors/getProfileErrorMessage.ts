import { RootState } from "app/providers/StoreProvider";

export const getProfileErrorMessage = (state: RootState) => state.profile.errorMessage