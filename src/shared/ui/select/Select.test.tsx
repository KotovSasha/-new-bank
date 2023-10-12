import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

const options = [
  { value: 'USD', title: 'US Dollar' },
  { value: 'EUR', title: 'Euro' },
  { value: 'GBP', title: 'British Pound' },
];

const defaultOption = options[0];
const onChange = jest.fn();
const setIsOpen = jest.fn();

describe('Select test', () => {
  it('should display placeholder if no value is selected', () => {
    render(
      <Select
        options={options}
        placeholder='Select currency'
        onChange={onChange}
        selected={null}
        isOpen={false}
        setIsOpen={setIsOpen}
      />,
    );

    const placeholder = screen.getByText(/select currency/i);

    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('data-selected', 'false');
  });

  it('should display selected value if provided', () => {
    render(
      <Select
        options={options}
        selected={defaultOption}
        onChange={onChange}
        isOpen={false}
        setIsOpen={setIsOpen}
      />,
    );

    const selected = screen.getByText(defaultOption.title);
    expect(selected).toBeInTheDocument();
    expect(selected).toHaveAttribute('data-selected', 'true');
  });
});
