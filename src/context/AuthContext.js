import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Función para login
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            
            if (!response.ok) throw new Error(data.error || "Error en login");
            
            setUser(data.user);
            localStorage.setItem('token', data.token);
            return data; // Para manejar el éxito en el componente Login
        } catch (error) {
            throw error; // Para manejar errores en el componente Login
        }
    };

    // Función para logout
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    // Verificar autenticación al cargar
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Opcional: Validar token con el backend
            // fetch(...) 
            setUser({ name: "Usuario", role: "Administrator" }); // Datos de ejemplo
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};