export const QRScannerModal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContainer}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Escanear Código QR</h2>
          <button style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div style={styles.scannerContainer}>
          {/* Simulador de cámara QR */}
          <div style={styles.qrScannerSimulator}>
            {/* Marco de escaneo animado */}
            <div style={styles.scanOverlay}>
              <div style={styles.scanLine}></div>
            </div>
            
            {/* Puntos QR simulados */}
            <div style={styles.qrDots}>
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    ...styles.qrDot,
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    opacity: Math.random() > 0.3 ? 1 : 0
                  }}
                />
              ))}
            </div>
          </div>

          {/* Indicador de escaneo exitoso (oculto inicialmente) */}
          <div style={styles.successMessage}>
            <div style={styles.checkIcon}>✓</div>
            <p>Código escaneado correctamente</p>
          </div>

          <div style={styles.instructions}>
            <p>Enfoca el código QR dentro del marco</p>
          </div>
        </div>

        <div style={styles.modalFooter}>
          <button style={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          {/* <button style={styles.flashButton}>
            Flash
          </button> */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontFamily: 'Helvetica'
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: '#01052e',
    color: 'white'
  },
  modalTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '500'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '0 10px'
  },
  scannerContainer: {
    padding: '20px',
    position: 'relative'
  },
  qrScannerSimulator: {
    width: '100%',
    height: '300px',
    backgroundColor: '#333',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '20px'
  },
  scanOverlay: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    height: '80%',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px'
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: 'rgba(0, 255, 0, 0.7)',
    animation: 'scan 2s infinite linear',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)'
  },
  qrDots: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  qrDot: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    backgroundColor: 'black',
    borderRadius: '50%'
  },
  successMessage: {
    display: 'none', /* Cambiar a 'flex' para simular éxito */
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    zIndex: 10
  },
  checkIcon: {
    fontSize: '50px',
    color: '#2ecc71',
    marginBottom: '15px'
  },
  instructions: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '14px',
    marginTop: '10px'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    borderTop: '1px solid #ecf0f1'
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  flashButton: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  '@keyframes scan': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(100%)' }
  }
};