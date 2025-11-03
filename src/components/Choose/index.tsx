import styles from './Choose.module.css';
import triangleBg from '../../assets/images/bg-triangle.svg';
import Action from '../Action';

type ActionType = 'rock' | 'paper' | 'scissors';

interface ComponentProps {
    handleOnClick: (action: ActionType) => void;
}

export default function MainScreen({handleOnClick}: (ComponentProps)) {
    
    return (
        <div className={styles.chooseOptions}>
            <img src={triangleBg} alt="Triangle" />
            <button className={styles.rock} 
            onClick={() => handleOnClick('rock')}
            >
                <Action selected='rock' canHover/>
            </button>
            <button className={styles.paper}
            onClick={() => handleOnClick('paper')}
            >
                <Action selected='paper' canHover/>
            </button>
            <button className={styles.scissors}
            onClick={() => handleOnClick('scissors')}
            >
                <Action selected='scissors' canHover/>
            </button>
        </div>
    )
}