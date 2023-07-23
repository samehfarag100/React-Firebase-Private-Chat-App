import React from 'react'
import NavbarComponent from './NavbarComponent';
import SearchComponent from './SearchComponent';
import UserChatComponent from './sidebar/UserChatComponent';
const SidebarComponent = () => {
  return (
    <div className='sidebar'>
      <NavbarComponent />
      <SearchComponent/>
      <UserChatComponent/>
    </div>
  )
}

export default SidebarComponent