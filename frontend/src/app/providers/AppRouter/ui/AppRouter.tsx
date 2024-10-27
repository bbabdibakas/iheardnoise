import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "../lib/routeConfig";
import { Suspense, useCallback } from "react";
import { RequireAuth } from "./RequireAuth";
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <div className={'content'}>
                <Suspense fallback={<AppPageLoader />}>
                    {route.element}
                </Suspense>
            </div>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.isRequiredAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter