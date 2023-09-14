import React, { useContext } from 'react'
import { SignInBtn } from '../../components';
import './style.css'
import { UserContext } from '../../contexts/user';
const Navbar = () => {


    const [user, setUser] = useContext(UserContext).user
    return (
        <div className='navbar'>
            <p>Social</p>
            {user ? <img className='nav_img' src={user.photoURL} /> : <SignInBtn />}
        </div>
    )
}

export default Navbar;