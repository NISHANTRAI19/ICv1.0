import React from 'react'
import { SignInBtn } from '../../components'
import { CreatePost, Navbar } from '../../containers'
import './style.css';

const index = () => {
    return (<div className='home'>

        <Navbar />
        <CreatePost />
    </div>
    )
}

export default index