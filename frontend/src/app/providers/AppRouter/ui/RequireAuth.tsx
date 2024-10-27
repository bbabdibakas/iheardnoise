import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routePath } from "../lib/routeConfig";
import { getUserData } from "entities/User";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const userData = useSelector(getUserData);
    const location = useLocation();

    if (!userData) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={routePath.main} state={{ from: location }} replace />;
    }

    return children;
}