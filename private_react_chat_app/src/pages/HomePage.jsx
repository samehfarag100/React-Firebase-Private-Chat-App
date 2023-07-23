import React from 'react'
import '../style.scss'
import SidebarComponent from '../components/SidebarComponent'
import MessagesComponent from '../components/MessagesComponent'
const HomePage = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            <SidebarComponent />
            <MessagesComponent />
        </div>
    </div>
  )
}

export default HomePage