import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';
import Nav2 from './Nav2';
import { useRef, useState } from 'react';
import useUserStore from '../store/userStore';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Mobilenav from './Mobilenav';

function Login() {

    const email = useRef("");
    const password = useRef("");
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const { setUser } = useUserStore();
    const [show, setShow] = useState(false);

    // 🔹 VALIDATION FUNCTION
    const validate = (data) => {
        let newErrors = {};

        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!data.password.trim()) {
            newErrors.password = "Password is required";
        } else if (data.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    };

    const signInHandler = async (e) => {
        e.preventDefault();

        const object = {
            email: email.current.value,
            password: password.current.value
        };

        // 🔹 Validate first
        const validationErrors = validate(object);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        setError({}); // clear errors

        try {
            const url = `http://localhost:8000/api/login/`;
            const fetchData = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(object)
            });

            const data = await fetchData.json();

            if (fetchData.ok) {
                localStorage.setItem("access_token", data.token);
                toast.success("Login Successful");

                // 🔹 Verify Token
                const token = localStorage.getItem("access_token");

                const fetchVerifyToken = async () => {
                    try {
                        const verify = await fetch(`http://localhost:8000/api/verify-token/`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });

                        const res = await verify.json();
                        const role = res.user_data?.role;

                        setUser(res.user_data);

                        if (role === "admin") {
                            window.location.href = "/";
                        } else {
                            navigate("/");
                        }

                    } catch (err) {
                        toast.error("Token verification failed");
                        console.error(err);
                    }
                };

                if (token) fetchVerifyToken();

            } else {
                // 🔹 Show backend validation errors
                if (data.error_type === "email") {
                    setError(prev => ({ ...prev, email: data.message }));
                }
                if (data.error_type === "password") {
                    setError(prev => ({ ...prev, password: data.message }));
                }

                toast.warn(data.message || "Something went wrong");
            }

        } catch (err) {
            console.error(err);
            toast.error("Network error. Try again later.");
        }
    };

    return (
        <div className="big-con">
            <Nav2 />

            <div className="login-container">
                <div className="login-container0">
                    <div className="login-container2">

                        <div className="login-con">
                            <h1>Login</h1>
                            <h5>Sign in to continue</h5>
                        </div>

                        <form onSubmit={signInHandler}>

                            {/* EMAIL */}
                            <label>Email</label>
                            <input ref={email} type="email" placeholder="Enter Email" />
                            {error.email && <p className="error-text">{error.email}</p>}

                            {/* PASSWORD */}
                            <label>Password</label>
                            <div className="view-but">
                                <input  
                                    type={show ? "text" : "password"}
                                    ref={password}
                                    className="view-input"
                                    placeholder="Password"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="view-button"
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>

                            <button className='login-butt' type="submit">Log in</button>
                        </form>

                        <div className="login-con1">
                            <Link to='/forgetpassword'>Forgotten Password?</Link>
                        </div>

                        <div className="create-box">
                            <Link to='/create'>Register Now</Link>
                        </div>

                        <div className="icon">
                            <Link to='/'><i className="fa-brands fa-google"></i></Link>
                        </div>

                    </div>
                </div>
            </div>
             <Mobilenav />
        </div>
    );
}

export default Login;
