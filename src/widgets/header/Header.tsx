import { useContext } from 'react';
import { CurrencyContext, Logo, Select } from '../../shared';
import kitten from '../../shared/ui/image/header/Kitten.png';
import styles from './Header.module.scss';
import { useGetSelectQuery } from '.';

export const Header = () => {
  const { currency, setCurrency, isOpenedSelect, setIsOpenedSelect } = useContext(CurrencyContext);
  const { data: options } = useGetSelectQuery();

  const findSelectedCurrency = (value: string) => options?.find((item) => item.value === value);

  const selectedCurrency = findSelectedCurrency(currency.value);

  const handleCurrencySelect = (value: string) => {
    const currency = findSelectedCurrency(value);
    if (currency) {
      setCurrency(currency);
    }
  };

  return (
    <header className={styles['header-container']}>
      <div className={styles['logo-container']}>
        <Logo />
        <div className={styles['select-container']}>
          {options && (
            <Select
              options={options}
              isOpen={isOpenedSelect}
              setIsOpen={setIsOpenedSelect}
              selected={selectedCurrency || { title: 'RUB', value: 'Russian Ruble' }}
              onChange={handleCurrencySelect}
              placeholder='Choose currency'
            />
          )}
        </div>
      </div>
      <img className={styles.image} src={kitten} />
    </header>
  );
};
