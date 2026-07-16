import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Unauthorized from "../pages/public/Unauthorized";



const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isInitializing, isAuthenticated, user } = useSelector((state) => state.auth)


    // if (isInitializing) {
    //     return <Navigate to="/loading" replace />
    // }


    if (!isAuthenticated) {
        return <Navigate
            to="/login"
            replace
        />
    }
    if (!allowedRoles.includes(user.role)) {
        alert("you can not access this page")
        return <Navigate
            to="/unauthorized"
            replace
        />
    }
    return children
}

export default ProtectedRoute;