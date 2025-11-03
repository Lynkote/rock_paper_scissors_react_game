import styles from './Rules.module.css';
import rulesImage from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

interface ComponentProps {
    handleOnClick: () => void;
}

export default function Rules({handleOnClick}: ComponentProps) {
    return (
        <section className={styles.rulesBackground}>
            <div className={`${styles.rules} popup-animation`}>
                <div>
                    <h2>rules</h2>
                    <button onClick={handleOnClick} className={styles.btnClose2}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                </div>
                <img src={rulesImage} alt="Rules" />
                <button onClick={handleOnClick} className={styles.btnClose1}>
                    <img src={closeIcon} alt="Close" />
                </button>
            </div>
        </section>
    )
}