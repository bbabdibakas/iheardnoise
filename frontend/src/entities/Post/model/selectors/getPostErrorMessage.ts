import { RootState } from "app/providers/StoreProvider";

export const getPostErrorMessage = (state: RootState) => state.post.errorMessage