import React from "react";
import imageLogin from "../context/image_login.jpg";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginScreen = () => {
    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.title}>BIENVENIDO</h2>
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <div style={styles.icon}>
                            <FaUser />
                        </div>
                        <input
                            type="text"
                            id="email"
                            placeholder="Ingrese su correo"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <div style={styles.icon}>
                            <FaLock />
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.options}>
                        <div style={styles.rememberMe}>
                            <input 
                                type="checkbox" 
                                id="rememberMe" />
                            <label htmlFor="rememberMe" style={styles.rememberMeLabel}>Recuerdame</label>
                        </div>
                        <a href="#forgot-password" style={styles.forgotPassword}>¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" style={styles.loginButton}>I N G R E S A R</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${imageLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Helvetica',
        padding: '20px'
    },
    loginBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '350px'
    },
    title: {
        marginBottom: '40px',
        fontSize: '26px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        border: '1px solid #000000',
        borderRadius: '5px',
        padding: '5px',
    },
    icon: {
        margin: '0 10px',
        color: '#555',
    },
    input: {
        flex: 1,
        padding: '10px',
        fontSize: '14px',
        border: 'none',
        outline: 'none',
        background: 'transparent',
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        flexDirection: 'row'
    },
    rememberMe: {
        display: 'flex',
        alignItems: 'center',
    },
    rememberMeLabel: {
        marginLeft: '5px',
        fontSize: '14px',
        color: '#555',
    },
    forgotPassword: {
        fontSize: '14px',
        color: '#2c89db',
        textDecoration: 'none',
    },
    loginButton: {
        padding: '10px',
        fontSize: '16px',
        background: 'linear-gradient(to right, #19b3a1, #a42cdb)',
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        with: '100%'
    },
};

export default LoginScreen;