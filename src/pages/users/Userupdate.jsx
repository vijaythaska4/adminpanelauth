
import React, { useEffect, useState } from 'react'


function Userupdate() {
    const [data , setData] = useState()

    const handeluserget = async()=>{
        try {
            const responce = await http.get("/")
            const data= responce.data.data
            setData(data)
        } catch (error) {
            console.log(error);
            
        }

    }
    useEffect(()=>{
        handeluserget();
    },[])

    return (
        <div className="app-content content " >
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h2 className="content-header-title float-start mb-0">
                                    USER UPDATE
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bs-validation" >
                    <div className="row">
                        {/* Bootstrap Validation */}
                        <div className="col-md-6 col-12" style={{width:"100%"}}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Bootstrap Validation</h4>
                                </div>
                                <div className="card-body">
                                    <form className="needs-validation" noValidate="">
                                        <div className="mb-1">
                                            <label className="form-label" htmlFor="basic-addon-name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="basic-addon-name"
                                                className="form-control"
                                                value={data?.name}
                                                placeholder="Name"
                                               
                                                required=""
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please enter your name.</div>
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label" htmlFor="basic-default-email1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="basic-default-email1"
                                                className="form-control"
                                                placeholder="john.doe@email.com"
                                                aria-label="john.doe@email.com"
                                                required=""
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please enter a valid email</div>
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label" htmlFor="basic-default-password1">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="basic-default-password1"
                                                className="form-control"
                                                placeholder="············"
                                                required=""
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">
                                                Please enter your password.
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label" htmlFor="select-country1">
                                                Country
                                            </label>
                                            <select className="form-select" id="select-country1" required="">
                                                <option value="">Select Country</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                                <option value="france">France</option>
                                                <option value="australia">Australia</option>
                                                <option value="spain">Spain</option>
                                            </select>
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please select your country</div>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="customFile1" className="form-label">
                                                Profile pic
                                            </label>
                                            <input
                                                className="form-control"
                                                type="file"
                                                id="customFile1"
                                                required=""
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label">Gender</label>
                                            <div className="form-check my-50">
                                                <input
                                                    type="radio"
                                                    id="validationRadio3"
                                                    name="validationRadioBootstrap"
                                                    className="form-check-input"
                                                    required=""
                                                />
                                                <label className="form-check-label" htmlFor="validationRadio3">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    id="validationRadio4"
                                                    name="validationRadioBootstrap"
                                                    className="form-check-input"
                                                    required=""
                                                />
                                                <label className="form-check-label" htmlFor="validationRadio4">
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="validationCustomUsername" className="form-label">
                                                Username
                                            </label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">
                                                    @
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <label
                                                className="d-block form-label"
                                                htmlFor="validationBioBootstrap"
                                            >
                                                Bio
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="validationBioBootstrap"
                                                name="validationBioBootstrap"
                                                rows={3}
                                                required=""
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="validationCheckBootstrap"
                                                    required=""
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="validationCheckBootstrap"
                                                >
                                                    Agree to our terms and conditions
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default Userupdate