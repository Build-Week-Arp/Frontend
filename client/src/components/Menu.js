import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Profile', value: 1 },
  { key: 2, text: 'Messages', value: 2 },
  { key: 3, text: 'Settings', value: 3 },
  { key: 4, text: 'Log Out', value: 4 },
]

const DropDownMenu = () => (
  <Menu compact>
    <Dropdown icon="user circle icon" options={options} simple item />
  </Menu>
)

export default DropDownMenu;