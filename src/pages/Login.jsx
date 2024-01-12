import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { http } from '../axios';
import { BeatLoader } from "react-spinners";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true); 
        try {
            const response = await http.post("/loginsignup", { email, password });
            console.log(response, "response")
            if (response.data) {
                toast.success("Admin login Successfully");
                navigate("/dashboard");
                localStorage.setItem("adminProfile", JSON.stringify(response.data));
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred during login. Please try again later.');
        } finally {
            setLoading(false); 
        }
    }

    return (
        <div className="app-content content " style={{ marginLeft: "0px", display: "flex", justifyContent: "center" }} >
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper">
                <div className="content-header row"></div>
                <div className="content-body" >
                    <div className="auth-wrapper auth-v1 px-2">
                        <div className="auth-inner py-2">
                            {/* Login v1 */}
                            <div className="card mb-0" >
                                <div className="card-body" style={{ marginBottom: "20%" }}>
                                    <Link href="#" className="brand-logo">
                                        <svg
                                            viewBox="0 0 139 95"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            height={28}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="linearGradient-1"
                                                    x1="100%"
                                                    y1="10.5120544%"
                                                    x2="50%"
                                                    y2="89.4879456%"
                                                >
                                                    <stop stopColor="#000000" offset="0%" />
                                                    <stop stopColor="#FFFFFF" offset="100%" />
                                                </linearGradient>
                                                <linearGradient
                                                    id="linearGradient-2"
                                                    x1="64.0437835%"
                                                    y1="46.3276743%"
                                                    x2="37.373316%"
                                                    y2="100%"
                                                >
                                                    <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                                                    <stop stopColor="#FFFFFF" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                            >
                                                <g
                                                    id="Artboard"
                                                    transform="translate(-400.000000, -178.000000)"
                                                >
                                                    <g
                                                        id="Group"
                                                        transform="translate(400.000000, 178.000000)"
                                                    >
                                                        <path
                                                            className="text-primary"
                                                            id="Path"
                                                            d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                                            style={{ fill: "currentColor" }}
                                                        />
                                                        <path
                                                            id="Path1"
                                                            d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                                                            fill="url(#linearGradient-1)"
                                                            opacity="0.2"
                                                        />
                                                        <polygon
                                                            id="Path-2"
                                                            fill="#000000"
                                                            opacity="0.049999997"
                                                            points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                                                        />
                                                        <polygon
                                                            id="Path-21"
                                                            fill="#000000"
                                                            opacity="0.099999994"
                                                            points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                                                        />
                                                        <polygon
                                                            id="Path-3"
                                                            fill="url(#linearGradient-2)"
                                                            opacity="0.099999994"
                                                            points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                                    </Link>
                                    <h4 className="card-title mb-1">Welcome to Vuexy! 👋</h4>
                                    <p className="card-text mb-2">
                                        Please sign-in to your account and start the adventure
                                    </p>
                                    <form onSubmit={handleSubmit}
                                        className="auth-login-form mt-2"

                                        method="POST"
                                    >
                                        <div className="mb-1">
                                            <label htmlFor="login-email" className="form-label" style={{ marginTop: "20px" }}>
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="login-email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                name="email"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="login-password" style={{ marginTop: "30px" }}>
                                                    Password
                                                </label>
                                                {/* <a href="page-auth-forgot-password-v1.html">
                                                        <small>Forgot Password?</small>
                                                    </a> */}
                                            </div>
                                            <div className="input-group input-group-merge form-password-toggle ">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-merge"
                                                    id="login-password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    name="login-password"
                                                    placeholder="Enter Password"
                                                />

                                            </div>
                                        </div>
                                        {loading ? (
                                            <button type='submit' className="btn btn-primary w-100 " style={{ marginTop: "50px" }} disabled>
                                                <BeatLoader color="#f9fcfb" />
                                            </button>
                                        ) : (
                                            <button type='submit' className="btn btn-primary w-100 " style={{ marginTop: "50px" }} >
                                                Sign in
                                            </button>
                                        )}
                                    </form>
                                </div>
                            </div>
                            {/* /Login v1 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Login