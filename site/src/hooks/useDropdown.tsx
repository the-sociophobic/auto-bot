import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'


const useDropdown = (options: string[]) => {
  const [active, setActive] = React.useState(options[0])
  const DropdownSimple: React.FC<{ className?: string }> = ({ className }) =>
    <DropdownButton
      className={className}
      title={active}
      variant='secondary'
    >
      {options.map(option =>
        <Dropdown.Item
          key={option}
          onClick={() => setActive(option)}
        >
          {option}
        </Dropdown.Item>
      )}
    </DropdownButton>

  return [active, DropdownSimple]
}


export default useDropdown
