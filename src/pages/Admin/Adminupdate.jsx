import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

function Adminupdate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const fetchAdminData = async () => {
    try {
      const response = await http.get("/adminget");
      const data = response.data.data[0];
      setName(data.name);
      setEmail(data.email);
      setImage(data.image);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleImageChange = async (e) => {
    setLoading(true);
    try {
      const fommData = new FormData();
      fommData.append('file', e.target.files[0]);
      const res = await http.post('/fileuploade', fommData);
      setImage(res?.data?.file ? res?.data?.file : "");
      setLoading(false);
    }
    catch (err) {
      console.log('file uploade err =======>', err);
      setLoading(false);
    }
  }

  const updateAdminData = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("adminProfile"));
      await http.put(`/adminupdate/${token.data._id}`, { name, image });
      toast.success("Admin Update Successfully");
      navigate("/adminview")
    } catch (error) {
      console.log('Error:', error);
      toast.error("Error updating admin data");
    }
  }


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
                  Update Admin Profile
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



                    <Link className="me-25">
                      <img
                        src={`http://localhost:4040/${image}`}
                        id="account-upload-img"
                        className="rounded me-50"
                        onChange={handleImageChange}
                        alt="profile image"
                        height={80}
                        width={80}
                      />
                    </Link>

                    <div className="mt-75 ms-1">
                      {loading ? (
                        <div className="loader">Loading...</div>
                      ) : (
                        <input
                          type="file"
                          id="account-upload"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      )}
                      <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
                    </div>
                    {/*/ upload and reset button */}
                  </div>
                  {/*/ header section */}
                  <form onSubmit={updateAdminData} className="validate-form mt-2">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            id="email"
                            name="name"
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
                        <button type="submit" className="btn btn-primary mt-2 me-1">
                          Save changes
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

export default Adminupdate