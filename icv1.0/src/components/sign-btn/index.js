import React, { useContext, useState } from 'react'
import './style.css'
import { signInWithGoogle } from '../../services/auth'
import { UserContext } from '../../contexts/user';

const SignInBtn = () => {

    const [user, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if (userBySignIn)
            setUser(userBySignIn);


    }



    return (
        <div className='signInBtn'
            onClick={signInBtnClick}
        ><p>Sign in with Google</p>


        </div>
    )
}

export default SignInBtn;
