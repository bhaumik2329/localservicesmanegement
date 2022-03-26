
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import '../assets/css/lib/owl.carousel.min.css'
import '../assets/css/lib/owl.theme.default.min.css'
import '../assets/css/lib/weather-icons.css'
import '../assets/css/lib/menubar/sidebar.css'


export const GetRole = () => {
    const toast1 = () => { }




    const [roleList, setroleList] = useState([])
    const [roleName, setRoleName] = useState('');

    const getData = () => {

        axios.get('http://localhost:4000/roles').then(data => {
            setroleList(data.data.data)
            console.log(data)
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/roles/` + id).then(res => {


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

        }).catch(err => {
            console.log(err)
        })
    }

    const postData = (e) => {

        e.preventDefault();


        var data = {
            roleName: roleName
        }

        axios.post('http://localhost:4000/roles', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 Role Added Successfully!`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });



        }).catch(err => {
            console.log(err)
        })

    }



    useEffect(() => {
        getData()
    }, [])

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
                                                <li class="breadcrumb-item active">Roles</li>
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

                {/* add role */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add Role</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='roleName' placeholder='roleName' onChange={(e) => { setRoleName(e.target.value) }} />

                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add Role" onClick={toast1} />
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

                <br /><br /><br />


                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div className="container">
                                    <table class="table table-dark table-striped">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">RoleId</th>
                                                <th scope="col">RoleName</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                roleList.map((role) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{role._id}</th>
                                                                <td>{role.roleName}</td>
                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(role._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/update/${role._id}`} className="btn btn-success">UPDATE</Link>
                                                                </td>



                                                            </tr>

                                                        </>
                                                    )

                                                })
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>










            </div>

        </>
    )
}
