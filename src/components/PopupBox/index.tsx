import styles from './PopupBox.module.css';

interface ComponentProps {
   message: string;
   handleOnConfirm: () => void;
   handleOnCancel: () => void;
   labelConfirm?: string;
   labelCancel?: string;
}


export default function PopupBox({message, handleOnConfirm, handleOnCancel, labelConfirm, labelCancel}: ComponentProps) {
    return (
       <div className={styles.popupBoxBackgound}>
        <div className={`${styles.popupBox} popup-animation`}>
            <p>{message}</p>
            <div className={styles.popupBoxButtonContainer}>
                <button onClick={handleOnConfirm} className={styles.btnConfirm}>{ labelConfirm || 'Confirm' }</button>
                <button onClick={handleOnCancel}>{ labelCancel || 'Cancel' }</button>
            </div>
        </div>
       </div>
    )
}