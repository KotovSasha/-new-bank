import { useContext } from 'react';
import cn from 'classnames';
import { CurrencyContext } from '../../shared';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { currency, isOpenedSelect } = useContext(CurrencyContext);
  return (
    <main className={cn(styles['main-container'], { [styles['active-select']]: isOpenedSelect })}>
      <p className={styles.currency}>{currency?.value}</p>
    </main>
  );
};
