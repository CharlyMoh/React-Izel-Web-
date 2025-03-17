import React from "react";
import { FaHome, FaUser, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export const Dashboard = () => {
    return (
        <div style={styles.container}>
            {/* Barra de tareas lateral */}
            <div style={styles.sidebar}>
                <div style={styles.logo}>
                    <h2 style={styles.logoText}>Panel de Control</h2>
                </div>
                <ul style={styles.menu}>
                    {/* <li style={styles.menuItem}>
                        <FaHome style={styles.menuIcon} />
                        <span style={styles.menuText}>Inicio</span>
                    </li> */}
                    <li style={styles.menuItem}>
                        <FaUser style={styles.menuIcon} />
                        <span style={styles.menuText}>Perfil</span>
                    </li>
                    <li style={styles.menuItem}>
                        <CgFileDocument style={styles.menuIcon}/>
                        <span style={styles.menuText}>Reinscripción</span>
                    </li>
                    <li style={styles.menuItem}>
                        <FaCog style={styles.menuIcon} />
                        <span style={styles.menuText}>Configuración</span>
                    </li>
                </ul>
                <div style={styles.footer}>
                    <button style={styles.logoutButton}>
                        <FaSignOutAlt style={styles.logoutIcon} />
                        <span style={styles.logoutText}>Cerrar Sesión</span>
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <div style={styles.mainContent}>
                <h1 style={styles.contentTitle}>Bienvenido al Panel de Control</h1>
                <p style={styles.contentText}>
                    Aquí puedes gestionar tu cuenta.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '250px',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#01052e',
    },
    logo: {
        marginBottom: '30px',
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    menu: {
        listStyle: 'none',
        padding: '0',
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        padding: '10px',
        borderRadius: '5px',
        ':hover': {
            backgroundColor: '#1c6da8',
        },
    },
    menuIcon: {
        fontSize: '20px',
        marginRight: '10px',
    },
    menuText: {
        fontSize: '16px',
    },
    footer: {
        marginTop: 'auto',
    },
    logoutButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        ':hover': {
            backgroundColor: '#1c6da8',
        },
    },
    logoutIcon: {
        fontSize: '20px',
        marginRight: '10px',
    },
    logoutText: {
        fontSize: '16px',
    },
    mainContent: {
        flex: 1,
        padding: '40px',
        backgroundColor: '#f0f0f0',
    },
    contentTitle: {
        fontSize: '32px',
        color: '#333',
        marginBottom: '20px',
    },
    contentText: {
        fontSize: '18px',
        color: '#555',
    },
};

export default Dashboard;