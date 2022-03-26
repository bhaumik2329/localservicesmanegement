import React from 'react'
import { useEffect, useState } from 'react'

export const Profile = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    useEffect(() => {
        setemail(localStorage.getItem('email'))
        setpassword(localStorage.getItem('password'))

        return () => {

        }

    })

    const p = email ? <h1>email:{email},password:{password}</h1> : <h1>please login first</h1>

    return (
        <div>
            <h1>{p}</h1>



        </div>
    )
}
