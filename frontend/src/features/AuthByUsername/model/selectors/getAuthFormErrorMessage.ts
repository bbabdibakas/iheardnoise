import { RootState } from "app/providers/StoreProvider";

export const getAuthFormErrorMessage = (state: RootState) => state.authForm.errorMessage