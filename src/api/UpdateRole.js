import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateRole = () => {
    const toast1 = () => { }


    var id = useParams().id;

    const [role, setRole] = useState('')
    const [roleName, setRoleName] = useState('')


    const getData = () => {

        axios.get(`http://localhost:4000/roles/${id}`).then(res => {

            setRole(res.data.data)
            console.log(res.data.data)

        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        getData()
    }, [])




    const updateData = (e) => {

        var updateData = {
            roleId: id,
            roleName: roleName,
        }
        e.preventDefault()

        axios.put('http://localhost:4000/roles', updateData).then(res => {
            toast.success('🦄 Data Deleted Successfully!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        })



    }










    return (
        <>
            <div>

                {/* sidebar */}
                <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                    <div class="nano">
                        <div class="nano-content">
                            <ul>
                                <div class="logo"><a href="index.html">
                                    {/* <!-- <img src="assets/images/logo.png" alt="" /> --> */}
                                    <span>Admin</span></a></div>

                                <li><Link class="sidebar-sub-toggle" to="/admin/Dashboard"><i class="ti-home"></i> Dashboard  </Link>

                                </li>

                                <li class="label">tables</li>
                                <li><Link class="sidebar-sub-toggle" to="/GetRole"><i class="ti-desktop"></i> Roles </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* sidebar completed */}

                {/* Header */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">

                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                    <div class="container-fluid">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr class="dropdown-divider" /></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>

                                            </ul>
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button class="btn btn-outline-success" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Header completed */}



                {/* welcome */}
                <div class="content-wrap">
                    <div class="main">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-8 p-r-0 title-margin-right">
                                    <div class="">
                                        <div class="page-title">
                                            <h3>Hello, <span>Welcome Here</span></h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                                <div class="col-lg-4 p-l-0 title-margin-left">
                                    <div class="">
                                        <div class="page-title">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="#">Admin/</Link></li>
                                                <li class="breadcrumb-item active">Roles update</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* welcome completed */}




                <div class="header">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="col-lg-8">

                                <form onSubmit={updateData}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Role Id</label>
                                        <input type="text" class="form-control" placeholder={role._id}
                                            onChange={(e) => setRoleName(e.target.value)} disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Role Name</label>
                                        <input type="text" class="form-control" placeholder={role.roleName}
                                            onChange={(e) => setRoleName(e.target.value)} />
                                    </div>

                                    <button type="submit" class="btn btn-primary" onClick={toast1}>Update</button>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={2500}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


