import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { PostPage } from "pages/PostPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export type AppRouteProps = RouteProps & {
    isRequiredAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    POST = 'post',

    //last
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.POST]: '/post',

    //last
    [AppRoutes.NOT_FOUND]: '/*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />
    },
    [AppRoutes.PROFILE]: {
        path: routePath.profile,
        element: <ProfilePage />,
        isRequiredAuth: true
    },
    [AppRoutes.POST]: {
        path: routePath.post,
        element: <PostPage />,
        isRequiredAuth: true
    },

    //last 
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />
    },
}