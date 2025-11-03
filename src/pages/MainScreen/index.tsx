import { useEffect, useState } from 'react';
import logoSVG from '../../assets/images/logo.svg';
import Rules from '../../components/Rules';
import Choose from '../../components/Choose';
import Result from '../../components/Result';
import PopupBox from '../../components/PopupBox';
import styles from './MainScreen.module.css';

type GameStateType = 'choose' | 'result';
type ActionType = 'rock' | 'paper' | 'scissors';

export default function MainScreen() {
    const [gameState, setGameState] = useState<GameStateType>('result');
    const [gameScore, setGameScore] = useState<number>(0);
    const [playerAction, setPlayerAction] = useState<ActionType>('scissors');
    const [aiAction, setAiAction] = useState<ActionType>('scissors');
    const [result, setResult] = useState<'win' | 'lose' | 'draw'>('draw');
    const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
    const [isClearBoxOpen, setIsCleaBoxOpen] = useState<boolean>(false);

    const setGameScoreToLocalStorage = (score: number): void => {
        localStorage.setItem('score', JSON.stringify(score));
    };

    const removeSave = (): void => {
        localStorage.removeItem('save');
    }

    useEffect(() => {
        // get game score from local storage
        const score = localStorage.getItem('score');
        if (score) {
            setGameScore(+score);
        }
    }, []);

    const getResult = (player: ActionType, ai: ActionType): 'win' | 'lose' | 'draw' => {
        if (player === ai) return 'draw'
        
        if (
            (player === 'rock' && ai === 'scissors') ||
            (player === 'paper' && ai === 'rock') || 
            (player === 'scissors' && ai === 'paper')
        ) { return 'win' }
        
        return 'lose'
    };

    const setNewAction = (action: ActionType): void => {
        const number: number = Math.random();
        const chosenAiAction: ActionType = number > 0.66 ? 'rock' : number > 0.33 ? 'paper' : 'scissors';
        const gameResult = getResult(action, chosenAiAction);
        
        if (gameResult === 'win') {
            setGameScore(prev => {
                const newScore = prev + 1;
                setGameScoreToLocalStorage(newScore);
                return newScore
            });
        }

        setAiAction(chosenAiAction);
        setResult(gameResult);
        setPlayerAction(action);
        setGameState('result');
    };

    return (
        <main>
            {isClearBoxOpen && 
            <PopupBox 
            handleOnCancel={() => setIsCleaBoxOpen(false)} 
            handleOnConfirm={() => {
                setGameScore(0); 
                removeSave();
                setIsCleaBoxOpen(false);
            }}
            message='Clear score?'
            labelCancel='No'
            labelConfirm='Clear all'
            />}
            
            <header className={styles.headerContainer}>
                <img src={logoSVG} alt="Logo" className={styles.headerLogo}/>
                <button className={styles.btnAndScoreContainer} onClick={() => setIsCleaBoxOpen(true)}>
                    <p className={styles.scoreTitle}>score</p>
                    <p className={styles.scoreValue}>{gameScore}</p>
                </button>
            </header>

            <section className={styles.mainContent}>
                {gameState === 'choose' && <Choose handleOnClick={setNewAction} />}
                {gameState === 'result' && 
                <Result 
                playerAction={playerAction} 
                aiAction={aiAction}
                result={result}
                quit={() => setGameState('choose')}
                />}
            </section>

            {isRulesOpen && <Rules handleOnClick={() => setIsRulesOpen(false)}/>}

            <button className={styles.btnRules}
            onClick={() => setIsRulesOpen(true)}
            >
                rules
            </button>
        </main>
    )
}