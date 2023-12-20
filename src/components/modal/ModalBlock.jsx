import Modal from 'react-modal';
import s from "./ModalBlock.module.css"

export default function ModalBlock ({isOpen, onRequestClose}) {
    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className={s.Modal}
                overlayClassName={s.Overlay}

            >
                <iframe 
                    src="https://vk.com/video_ext.php?oid=-86529522&id=456242449&hd=1" 
                    width="100%"
                    height="100%" 
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
        </Modal>
    )
}