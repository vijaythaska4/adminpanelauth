import React, { useEffect, useState } from 'react'
import { http } from "../../axios"
import { toast } from 'react-toastify';
import feather from 'feather-icons';
function Changepassword() {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const { currentPassword, newPassword, confirmPassword } = passwordData;
            if (newPassword !== confirmPassword) {
                toast.error("New password and confirm password do not match");
                return;
            }

            const formData = { currentPassword, newPassword, confirmPassword };
            const token = JSON.parse(localStorage.getItem("adminProfile"))
            if (!token) {
                toast.error("Token not found. Please log in.");
                return;
            }

            const response = await http.post(`/changepassword/${token.data._id}`, formData);
            if (response.data) {
                toast.success("Password Change Successfully ");
                setPasswordData({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                });
            } else {
                throw Error();
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again later.");
        }
    }
    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        if (feather) {
            feather.replace({
                width: 14,
                height: 14
            });
        }
    })

    return (
        <div className="app-content content " style={{ marginBottom: "6rem" }}>
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h2 className="content-header-title float-start mb-0">
                                    Admin Change Password
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    {/* Basic Horizontal form layout section start */}
                    <section id="basic-horizontal-layouts" >
                        <div className="row">
                            <div className="col-md-6 w-100 col-12">
                                <div className="card">
                                    <div className="card-header" >
                                        <h4 className="card-title">Horizontal Form with Icons</h4>
                                    </div>
                                    <div className="card-body" >
                                        <form onSubmit={handleChangePassword} className="form form-horizontal">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-1 row">
                                                        <div className="col-sm-3">
                                                            <label className="col-form-label" htmlFor="pass-icon">
                                                                Current Password
                                                            </label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div className="input-group input-group-merge">
                                                                <span className="input-group-text">
                                                                    <i data-feather="lock" />
                                                                </span>
                                                                <input
                                                                    type="password"
                                                                    value={passwordData?.currentPassword}
                                                                    id="pass-icon"
                                                                    className="form-control"
                                                                    name="currentPassword"
                                                                    placeholder="Current Password"
                                                                    onChange={handlePasswordChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-1 row">
                                                        <div className="col-sm-3">
                                                            <label className="col-form-label" htmlFor="pass-icon">
                                                                New Password
                                                            </label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div className="input-group input-group-merge">
                                                                <span className="input-group-text">
                                                                    <i data-feather="lock" />
                                                                </span>
                                                                <input
                                                                    type="password"
                                                                    id="pass-icon"
                                                                    value={passwordData?.newPassword}
                                                                    className="form-control"
                                                                    name="newPassword"
                                                                    onChange={handlePasswordChange}
                                                                    placeholder="New Password"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-1 row">
                                                        <div className="col-sm-3">
                                                            <label className="col-form-label" htmlFor="pass-icon">
                                                                Confirm Password
                                                            </label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div className="input-group input-group-merge">
                                                                <span className="input-group-text">
                                                                    <i data-feather="lock" />
                                                                </span>
                                                                <input
                                                                    type="password"
                                                                    id="pass-icon"
                                                                    value={passwordData?.confirmPassword}
                                                                    className="form-control"
                                                                    name="confirmPassword"
                                                                    onChange={handlePasswordChange}
                                                                    placeholder="Confirm Password"
                                                                    required
                                                                    />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 offset-sm-3">
                                                    <button type="submit" className="btn btn-primary me-1">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Changepassword