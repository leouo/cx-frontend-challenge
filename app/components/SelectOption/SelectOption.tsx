import React, { FC } from 'react'
import classNames from 'classnames'
import styles from '@/styles/Select.module.css'

export interface ISelectOptionComponent {
  isSelected: boolean;
  value: string;
  children: React.ReactNode;
  onOptionChange: (event: React.KeyboardEvent | React.MouseEvent, value: string) => void
}

export const SelectOption: FC<ISelectOptionComponent> = ({ children, value, isSelected, onOptionChange }) => {

  const classes = classNames(styles.select__option, {
    [styles['select__option--selected']]: isSelected,
  })

  return (
    <li
      tabIndex={0}
      role="option"
      className={classes}
      onClick={event => onOptionChange(event, value)}
      onKeyDown={event => onOptionChange(event, value)}
    >
      {children}
    </li>
  )
}
