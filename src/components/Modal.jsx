import styles from './Modal.module.css';
function Modal({children, onClick}){
    return (
        <>
            <div className={styles.backdrop} onClick={onClick}></div>
            <dialog open className={styles.modal}>{children}</dialog>
        </>
    )
}
export default Modal;