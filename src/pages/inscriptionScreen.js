import React from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";

export const InscriptionScreen = () => {
    return (
        <div style={styles.container}>
            <div style={styles.uploadBox}>
                <h2 style={styles.title}>Suba sus archivos en formato .PDF</h2>
                <form style={styles.form}>
                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>ACTA DE NACIMIENTO</span>
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>CURP</span>
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>CERTIFICADO DE ESCUELA</span>
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>COMPROBANTE DE PAGO</span>
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            <FaFilePdf style={styles.icon} />
                            <span>FOTOGRAFÍA</span>
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.createAccountButton}>
                        <FaUpload style={styles.buttonIcon} />
                        SOLICITAR INSCRIPCIÓN
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
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        fontSize: '16px',
        color: '#555',
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
        ':hover': {
            backgroundColor: '#1c6da8',
        },
    },
    buttonIcon: {
        marginRight: '10px',
    },
};
