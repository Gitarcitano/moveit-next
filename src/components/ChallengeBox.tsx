import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext);
  const {resetCountdown} = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();

  }

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
            onClick={handleChallengeFailed}
          >
            Failed
          </button>
          <button 
            type="button"
            className={styles.challengeSucceededButton}
            onClick={handleChallengeSucceeded}
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