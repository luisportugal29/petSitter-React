import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if ( !isLogged ) {
            navigate('/login');
        }
    }, [isLogged, dispatch, navigate ]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-md">
            <Link to="/home" className="text-white text-2xl font-semibold">
                PetSitter
            </Link>
            <div className="flex items-center space-x-4">
                {isLogged && (
                    <div className="flex items-center space-x-4">
                        <p className="text-white">{`¡Hola, ${user.name}!`}</p>
                        <button
                            className="text-white focus:outline-none"
                            onClick={handleLogout}
                        >
                            <span className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300 shadow-md">
                                Cerrar Sesión
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};


export default NavBar;