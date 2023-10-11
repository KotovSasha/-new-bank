import { createContext, useState } from 'react';

type Currency = {
  title: string;
  value: string;
};

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
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
