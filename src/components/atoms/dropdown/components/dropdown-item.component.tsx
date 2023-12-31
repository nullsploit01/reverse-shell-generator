import React, { FC } from 'react'

type IDropdownItemProps = {
  label: string
  value: string
  onClick?: (value: string) => void
}

const DropdownItem: FC<IDropdownItemProps> = ({ label, value, onClick }) => {
  return (
    <a onClick={() => onClick && onClick(value)} className="dropdown-item text-sm">
      {label}
    </a>
  )
}

export default DropdownItem
