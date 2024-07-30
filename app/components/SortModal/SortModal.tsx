import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import Modal from '@/components/Modal'
import { SelectOption } from '@/components/SelectOption'
import { ISelectOption } from '@/components/Select'

interface ISortModal {
  isSortModalOpen: boolean;
  onSortModalClose: () => void;
  availableSorts: ISelectOption[];
  defaultSort: ISelectOption;
}

const SortModal: FC<ISortModal> = ({ isSortModalOpen, onSortModalClose, availableSorts, defaultSort }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSort.id)

  const { query, push, pathname } = useRouter()

  const handleOptionChange = (_: any, selectedOption: string) => {
    setSelectedOption(selectedOption)
    onSortModalClose()
    push({
      pathname,
      query: {
        ...query,
        sort: selectedOption,
      },
    })
  }

  return (
    <Modal
      isOpen={isSortModalOpen}
      onClose={onSortModalClose}
      title="Ordenar"
    >
      <ul>
        {availableSorts.map(({ name, id }) => (
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
    </Modal>
  )
}

export default SortModal
