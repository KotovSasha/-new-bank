import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <p className={styles['main-text']}>CAT</p>
      <p className={styles['lateral-text']}>currencies academic terms</p>
    </div>
  );
};
