import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";



const PublicLayout = () => {
    return (
        <>
            <header>
                navbar
            </header>

            <Outlet />
        </>
    );
};

export default PublicLayout;