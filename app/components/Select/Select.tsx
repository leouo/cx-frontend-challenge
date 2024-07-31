import React, { useState, useEffect, FC } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { SelectOption } from '@/components/SelectOption'
import styles from '@/styles/Select.module.css'

export interface ISelectOption {
  id: string;
  name: string;
}

interface ISelect {
  id: string;
  options: ISelectOption[];
  onChange: (selectedOption: string) => void;
  defaultOption: string;
}

const getOptionName = (options: ISelectOption[], optionValue: string) => {
  const option = options.find(({ id }) => id === optionValue)

  return option?.name
}

export const Select: FC<ISelect> = ({ id, options, onChange, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  useEffect(() => {
    setSelectedOption(defaultOption)
  }, [defaultOption])

  const handleOptionChange = (event: React.KeyboardEvent | React.MouseEvent, value: string) => {
    if ((event as React.KeyboardEvent).key === 'Enter' || event?.type === 'click') {
      onChange(value)
      setSelectedOption(value)
    }
  }

  return (
    <div className={styles.select__container} role="listbox">
      <button
        id={id}
        className={styles.select__button}
        aria-haspopup="listbox"
        aria-labelledby="selected-value"
      >
        {getOptionName(options, selectedOption)}
        <i>
          <IoChevronDown className={styles.select__icon} stroke="#3483FA" size={16} />
        </i>
      </button>
      <ul className={styles.select__dropdown}>
        {options.map(({ name, id }) => (
          <SelectOption
            key={id}
            value={id}
            onOptionChange={handleOptionChange}
            isSelected={id === selectedOption}
          >
            {name}
          </SelectOption>
        ))}
      </ul>
    </div>
  )
}
