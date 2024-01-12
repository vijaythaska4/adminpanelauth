import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
import { http } from '../axios';
import { toast } from 'react-toastify';

function Navbar() {
    const [adminData, setAdminData] = useState({});

    const navigate = useNavigate()

    const handleConfirmLogout = async () => {
        try {
            const result = await Swal.fire({
                title: 'Confirm Logout',
                text: 'Are you sure you want to logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, logout'
            });
            if (result.isConfirmed) {
                const response = await http.put("/adminlogout", {})
                if (response.data) {
                    localStorage.clear();
                    toast.success("Admin Logout Successfully");
                    navigate("/");
                } else {
                    throw new Error("Logout failed");
                }
            } else {
                console.log("Logout cancelled");
            }
        } catch (error) {
            console.log(error);
            alert("Error occurred: " + error.message);
        }
    }


    const fetchAdminData = async () => {
        try {
            const response = await http.get("/adminget");
            const data = response.data.data[0];
            setAdminData(data);
        } catch (error) {
            console.error("Error fetching admin data: ", error);
        }
    }
    useEffect(() => {
        fetchAdminData();
    }, []);
    return (
        <>
            <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
                <div className="navbar-container d-flex content">
                    <div className="bookmark-wrapper d-flex align-items-center">
                        <ul className="nav navbar-nav d-xl-none">
                            <li className="nav-item">
                                <Link className="nav-link menu-toggle">
                                    <i className="ficon" data-feather="menu" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav navbar-nav align-items-center ms-auto">
                        <li className="nav-item dropdown dropdown-user">
                            <Link
                                className="nav-link dropdown-toggle dropdown-user-link"
                                id="dropdown-user"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="user-nav d-sm-flex d-none">
                                    <span className="user-name fw-bolder">{adminData.name}</span>
                                    <span className="user-status">Admin</span>
                                </div>
                                <span className="avatar">
                                    <img
                                        className="round"
                                        src={`http://localhost:4040/${adminData.image}`}
                                        alt="avatar"
                                        height={40}
                                        width={40}
                                    />
                                    <span className="avatar-status-online" />
                                </span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                                <Link to={"/adminview"} className="dropdown-item">
                                    <i className="me-50" data-feather="user" /> Profile
                                </Link>
                                <Link to={"/changepasword"} className="dropdown-item" >
                                    <i data-feather='lock'></i>  ChangePass..
                                </Link>
                                <Link onClick={handleConfirmLogout} style={{ color: "red" }} className="dropdown-item primary"  >
                                    <i className="me-50" data-feather="power" /> Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Navbar