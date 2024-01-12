import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
import { useNavigate, useParams } from 'react-router-dom'

function Userview() {
    const { id } = useParams()
    const [data, setData] = useState("")
    const navigate = useNavigate()

    const handleuserdata = async () => {
        try {
            const response = await http.get(`/getidbyuser/${id}`)
            const data = response.data.data
            setData(data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        handleuserdata();
    }), []
    return (
        <div className="app-content content "  >
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h2 className="content-header-title float-start mb-0">
                                    Admin All Details
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" style={{ width: "100%", }}>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div
                                    role="tabpanel"
                                    className="tab-pane active"
                                    id="account-vertical-general"
                                    aria-labelledby="account-pill-general"
                                    aria-expanded="true"
                                >
                                    <div className="d-flex">
                                        <a href="#" className="me-25">
                                            <img
                                                src={`http://localhost:4040/${data.image}`}
                                                id="account-upload-img"
                                                className="rounded me-50"
                                                alt="profile image"
                                                height={80}
                                                width={80}
                                            />
                                        </a>

                                        {/*/ upload and reset button */}
                                    </div>
                                    {/*/ header section */}
                                    <form className="validate-form mt-2">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={data?.name || ''}
                                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="email">
                                                        E-mail
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        value={data?.email || ''}
                                                        id="email"
                                                        name="name"
                                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="account-e-mail">
                                                        E-mail
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="account-e-mail"
                                                        name="email"
                                                        placeholder="Email"
                                                        defaultValue="pojkgoprtjgoirtgr"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <div className="mb-1">
                                                    <label className="form-label" htmlFor="account-company">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="account-company"
                                                        name="company"
                                                        placeholder="Company name"
                                                        defaultValue="kewnfrengier"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 mt-75">
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" onClick={() => { navigate("/users") }} className="btn btn-primary mt-2 me-1">
                                                    Back
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userview