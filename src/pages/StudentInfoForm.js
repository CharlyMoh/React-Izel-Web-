import React from "react";
import { FaFilePdf } from "react-icons/fa";

export const StudentInfoForm = () => {
    return (
        <div style={styles.container}>
            <div style={styles.uploadBox}>
                <h2 style={styles.title}>Solicitar Reinscripción</h2>
                <h2 style={styles.title}>Datos del Estudiante</h2>
                <form style={styles.form}>
                    <div style={styles.section}>
                        <label style={styles.label}>Nombre del Estudiante</label>
                        <input type="text" style={styles.input} placeholder="Ej. Juan Pérez" />
                    </div>
                    <div style={styles.section}>
                        <label style={styles.label}>Grupo</label>
                        <input type="text" style={styles.input} placeholder="Ej. 3A" />
                    </div>
                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>COMPROBANTE DE PAGO</span>
                        </label>
                        <input type="file" accept=".pdf" style={styles.input} />
                    </div>
                    <button type="submit" style={styles.createAccountButton}>
                        SOLICITAR
                    </button>
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
        backgroundColor: '#f0f0f0',
        fontFamily: 'Helvetica',
    },
    uploadBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    label: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '5px',
        display: 'block',
    },
    icon: {
        marginRight: '10px',
        color: '#2c89db',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
    },
    createAccountButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        fontSize: '16px',
        background: 'linear-gradient(to right, #19b3a1, #a42cdb)',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

