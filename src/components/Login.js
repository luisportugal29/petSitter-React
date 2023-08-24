import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions/authActions';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogged = useSelector(state => state.auth.isAuthenticated);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(isLogged);
        if ( isLogged ) {
            navigate('/home');
        }
    }, [isLogged, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        const loginData = { email, password };
        setEmail('');
        setPassword('');

        dispatch(login(loginData));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded py-2 px-3"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border rounded py-2 px-3"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      );

};


export default Login;