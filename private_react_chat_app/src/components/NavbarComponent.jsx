import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const NavbarComponent = () => {
  const {currentUser} = useContext(AuthContext)
  const handelLogout = () =>{
    auth.signOut()
  }
  return (
    <div className='navbar'>
        <span className='navbar_logo'>Chat App</span>
        <div className='navbar_user'>
          <img src= {currentUser.photoURL} alt='' />
          <span>{currentUser.displayName}</span>
          <button onClick={handelLogout}>Logout</button>
        </div>
    </div>
  )
}

export default NavbarComponent