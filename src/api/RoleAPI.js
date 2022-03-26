import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RoleAPI = () => {

    const toast1 = () => toast('Role Added Successfully')


    const getData = () => {

        axios.get('http://localhost:4000/roles').then(data => {
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }


    const [roleName, setRoleName] = useState('');



    const postData = (e) => {

        e.preventDefault();


        var data = {
            roleName: roleName
        }

        axios.post('http://localhost:4000/roles', data).then(res => {
            console.log(res.data)
            toast1();
            <ToastContainer />
        }).catch(err => {
            console.log(err)
        })

    }

    const [roleId, setRoleId] = useState('');

    const deleteId = (e) => {
        setRoleId(e.target.value)

    }


    const deleteData = (e) => {

        e.preventDefault()
        var id = roleId;
        axios.delete(`http://localhost:4000/roles/` + id).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    const [roleIdUpdate, setRoleIdUpdate] = useState('');
    const [roleNameUpdate, setRoleNameUpdate] = useState('');

    const updateId = (e) => {
        setRoleIdUpdate(e.target.value)
    }
    const updateName = (e) => {
        setRoleNameUpdate(e.target.value)


    }

    const updateData = (e) => {

        e.preventDefault()
        var data = {
            roleId: roleIdUpdate,
            roleName: roleNameUpdate
        }


        axios.put('http://localhost:4000/roles', data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

    }




    return (
        <div>
            <h1>Role Detail</h1>
            <h3>Retrive All Roles</h3>
            <button onClick={getData}>Get Roles</button>
            <br /><br />

            <h3>Add Role</h3>
            <form onSubmit={postData} method="POST">
                <input type="text" placeholder='roleName' name='roleName' onChange={(e) => { setRoleName(e.target.value) }} />
                <input type="submit" value="Add Role" />


            </form>
            <br />

            <h3>Delete Role</h3>
            <form onSubmit={deleteData} method="DELETE">
                <input type="text" placeholder='roleId' name='roleId' onChange={deleteId} />
                <input type="submit" value="Delete Role" />


            </form>

            <br />

            <h3>Update Role</h3>
            <form onSubmit={updateData} method="PUT">
                <input type="text" placeholder='roleId' name='roleId' onChange={updateId} />
                <input type="text" placeholder='roleName' name='roleName' onChange={updateName} />
                <input type="submit" value="Update Role" />


            </form>


        </div>

    )
}


