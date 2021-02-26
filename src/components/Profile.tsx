import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengeContext);
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/gitarcitano.png' alt='profile'/>
      <div>
        <strong>Giovanne Tarcitano</strong>
        <p>
          <img src='icons/level.svg' alt='Level'/>
          Level {level}
        </p>
      </div>
    </div>
  );
}