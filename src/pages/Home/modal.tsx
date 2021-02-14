import React from 'react';
import { createPortal } from 'react-dom';

// import { Container } from './styles';
interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalOpen: boolean;
    children: any;
    portalName: string;
    button?:string
}
const Modal: React.FC<ModalProps> = ({ modalOpen, children, setModalOpen, portalName, button="close" }) => {
    if (!modalOpen) {
        return null
    }
    else {
        return createPortal(
            <div id={portalName}>
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="modal-button-close" onClick={() => setModalOpen(false)}>{button}</button>
                        {children}
                    </div>
                </div>
            </div>,
            document.body
        )
    };
}

export default Modal;