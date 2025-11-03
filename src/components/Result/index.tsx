import styles from './Result.module.css';
import Action from '../Action';

type ActionType = 'rock' | 'paper' | 'scissors';

interface ComponentProps {
    playerAction: ActionType;
    aiAction: ActionType;
    result: 'win' | 'lose' | 'draw';
    quit: () => void;
}


export default function Result({playerAction, aiAction, result, quit}: ComponentProps) {
    const handleOnPlayAgain = (): void => {
        quit();
    };

    return (
        <div className={styles.resultContainer}>
            <div className={styles.result}>
                <div className={styles.playerAction}>
                    <div className={`${styles.actionBackgound} ${result === 'win' && styles.winner}`}>
                        <Action selected={playerAction} styleProps={styles.actionElement}/>
                    </div>
                    <p>you picked</p>
                </div>

                <div className={styles.aiAction}>
                    <div className={`${styles.actionBackgound} ${result === 'lose' && styles.winner}`}>
                        <Action selected={aiAction} styleProps={styles.actionElement}/>
                    </div>
                    <p>the house picked</p>
                </div>

                <div className={styles.gameOver}>
                    <p>{result === 'win' ? 'you win' : result === 'lose' ? 'you lose' : 'draw'}</p>
                    <button onClick={handleOnPlayAgain}>Play Again</button>
                </div>
            </div>
           
        </div>
    )
}