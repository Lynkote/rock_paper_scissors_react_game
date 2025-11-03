import styles from './Action.module.css';
import rockIcon from '../../assets/images/icon-rock.svg'
import paperIcon from '../../assets/images/icon-paper.svg'
import scissorsIcon from '../../assets/images/icon-scissors.svg'

interface ComponentProps {
    selected: 'rock' | 'paper' |'scissors';
    canHover?: boolean;
    styleProps?: string;
}

export default function Action({selected, canHover, styleProps}: ComponentProps) {
    const elements = {
        rock: {image: rockIcon, color: 'var(--color-red-600)', hover: 'var(--color-red-800)'},
        paper: {image: paperIcon, color: 'var(--color-purple-600)', hover: 'var(--color-purple-700)'},
        scissors: {image: scissorsIcon, color: 'var(--color-gold-500)', hover: 'var(--color-gold-600)'}
    };

    const el = elements[selected];
    return (
        <div 
        className={`${styles.action} ${canHover && styles.actionCaseButton} ${styleProps}`}
        style={{'--action-border-base': el.color, '--action-border-hover': el.hover} as React.CSSProperties}>
            <img src={el.image} alt={selected} />
        </div>
    )
}