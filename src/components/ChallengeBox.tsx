import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const {activeChallenge, resetChallenge} = useContext(ChallengeContext);

  return (
  <div className={styles.challengeBoxContainer}>
    {activeChallenge ? (
      <div className={styles.challengeActive}>
        <header>Win {activeChallenge.amount}xp</header>

        <main>
          <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
          <strong>New challenge</strong>
          <p>{activeChallenge.description}</p>
        </main>

        <footer>
          <button 
            type="button"
            className={styles.challengeFailedButton}
            onClick={resetChallenge}
          >
            Failed
          </button>
          <button 
            type="button"
            className={styles.challengeSucceededButton}
          >
            Completed
          </button>
        </footer>

      </div>
    ):(
      <div className={styles.challengeNotActive}>
        <strong>Finish the cycle to receive new challenges</strong>
        <p>
          <img src='icons/level-up.svg' alt='Level Up'/>
          Level up completing challenges
        </p>
      </div>
    )}
  </div>
  );
}