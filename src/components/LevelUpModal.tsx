
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelModal } = useContext(ChallengeContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          2
        </header>

        <strong>Congratulations</strong>
        <p>You have reached a new level.</p>

        <button type="button" onClick={closeLevelModal}>
          <img src='/icons/close.svg' alt='close'/>
        </button>
      </div>
    </div>
  )
}