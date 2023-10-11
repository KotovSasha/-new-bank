import { createContext, useState } from 'react';
import { SelectArgs } from '../../../widgets';

type CurrencyContextType = {
  currency: SelectArgs;
  setCurrency: (currency: SelectArgs) => void;
  isOpenedSelect: boolean;
  setIsOpenedSelect: (isOpened: boolean) => void;
};

type CurrencyProviderProps = {
  children: React.ReactNode;
};

export const CurrencyContext = createContext<CurrencyContextType>({
  currency: { title: 'RUB', value: 'Russian Ruble' },
  setCurrency: () => {},
  isOpenedSelect: false,
  setIsOpenedSelect: () => {},
});

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, setCurrency] = useState({ title: 'RUB', value: 'Russian Ruble' });
  const [isOpenedSelect, setIsOpenedSelect] = useState(false);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, isOpenedSelect, setIsOpenedSelect }}>
      {children}
    </CurrencyContext.Provider>
  );
};
