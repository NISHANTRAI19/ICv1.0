import React from 'react'
import './style.css'
import { SignInBtn } from '../../components'
const CreatePost = () => {
    return (
        <div className='createPost'>
            <SignInBtn />
            <p style={{ marginLeft: '12px' }}>to Post and comment</p>
        </div >
    )
}

export default CreatePost; 