import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
import { useNavigate } from 'react-router-dom';

function Adminview() {
  const [adminData, setAdminData] = useState({});
  const navigate = useNavigate()

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
    <div className="app-content content "  >
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                <h2 className="content-header-title float-start mb-0">
                  Admin all Details
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
                        src={`http://localhost:4040/${adminData?.image}`}
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
                            value={adminData?.name || ''}
                            onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                            className="form-control"
                            id="name"
                            name="name"
                            readOnly
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
                            value={adminData?.email || ''}
                            id="email"
                            name="name"
                            onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                            readOnly
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
                            readOnly
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
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-75">
                      </div>
                      <div className="col-12">
                        <button type="submit" onClick={() => { navigate("/adminupdate") }} className="btn btn-primary mt-2 me-1">
                          Edit
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

export default Adminview