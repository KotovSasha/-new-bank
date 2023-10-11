import { useRef, MouseEventHandler } from 'react';
import { ChevronDown, useOutsideClick } from '../..';
import { Option, SelectOption } from '../selectOption';
import styles from './Select.module.scss';

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  onChange?: (selected: Option['value']) => void;
};

export const Select = (props: SelectProps) => {
  const { options, placeholder, selected, isOpen, setIsOpen, onChange } = props;
  const rootRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(rootRef, () => setIsOpen(false));

  return (
    <div className={styles['select-wrapper']} ref={rootRef} data-is-active={isOpen}>
      <div className={styles.arrow}>
        <img src={ChevronDown} />
      </div>
      <div
        className={styles.placeholder}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.select}>
          {options.map((option) => (
            <SelectOption key={option.value} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};
