
import { useRef, useEffect } from 'react'
const Modal = ({ isOpen, onClose, styles }) => {
    const modalRef = useRef(null);
  
    useEffect(() => {
      // use modalRef here
    }, [onClose]);
  
    if (!isOpen) return null;
  
    return (
      <div style={styles.overlay}>
        <div ref={modalRef} style={styles.modal}>
          <h2>Modal Window</h2>
          <p>This is a modal. Click outside to close it.</p>
        </div>
      </div>
    );
  };

  export default Modal;