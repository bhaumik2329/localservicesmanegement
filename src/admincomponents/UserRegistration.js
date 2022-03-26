import React from 'react'
import { useState } from 'react'

export const UserRegistration = () => {

    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const firstNameHandler = (e) => {
        console.log(e.target.value)
        setfirstName(e.target.value)

    }
    const emailHandler = (e) => {
        console.log(e.target.value)
        setemail(e.target.value)

    }
    const passwordHandler = (e) => {
        console.log(e.target.value)
        setpassword(e.target.value)

    }

    const submit = (e) => {
        e.preventDefault()
        alert(`firstName: ${firstName} \nEmail:${email} \nPassword:${password}`)

    }

    return (
        <div className='container'>
            <h1>User Registration</h1>
            <form className="mx-3" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" onChange={(e) => { firstNameHandler(e) }} id="" aria-describedby="" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => { emailHandler(e) }} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => { passwordHandler(e) }} id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
