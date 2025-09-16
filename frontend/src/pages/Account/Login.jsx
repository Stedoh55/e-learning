import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { redirect } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SignUpImage from "../../assets/img/signup.jpeg"
import { Link } from "react-router-dom"
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import axiosInstance from "../../api/axios"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()     //For handling redirect after succssful login

    const [passwordToggle, setPasswordToggle] = useState(false);
    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("accounts/login", {
                username,
                password,
            });
            console.log(response.data);

            // Save tokens in the localstorage
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            // Navigating to dashboard Page
            navigate("/dashboard")

        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <section className="SignIn">
            {/* Page Navbar */}
            <Navbar />

            <div className="mx-[12px] mt-[16px] mb-[16px] rounded-[10px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd]">
                <div className="flex justify-between mx-auto my-3">
                    <div className="w-[50%]">
                        <div className="mx-auto">
                            <img src={SignUpImage} alt="" className="mx-auto" />
                        </div>
                    </div>

                    <div className="w-[500px] rounded-[10px] shadow-sm shadow-[#212529] my-[12px] mx-[16px]">
                        <div className="mx-3 my-3">
                            <h2>Welcome Back</h2>
                            <h4>Please Login to your account</h4>
                        </div>
                        <div className=" mx-3">
                            <form onSubmit={handleLogin} className="px-4 py-3 w-full">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                    <div className="form-control  border border-dark-subtle">
                                        <div className="flex justify-between">
                                            <input type={passwordToggle ? 'text' : 'password'} className=" block w-[90%] border-none outline-none" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                                            <div className="block m-auto text-[20px]" onClick={handlePasswordToggle}>
                                                {passwordToggle ? (<AiFillEyeInvisible />) : <IoEye />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 flex justify-start">
                                    <input type="checkbox" className="mr-[8px]" />
                                    <label for="checkbox" className="font-[300]">Remember me</label>
                                </div>
                                <div className="mb-3 mx-auto text-[12px] text-red-600">
                                    <p>{error}</p>
                                </div>
                                {/* Sign in Button */}
                                <div class=" mx-auto">
                                    <button className="w-full rounded-[6px] py-[4px]  bg-blue-700 text-white active:scale-90 transition-all duration-100 ease-out" type="submit">Login</button>
                                </div>
                            </form>
                            {/* SignUp footer Links */}
                            <div className="mb-4 mt-[16px] mx-3">
                                <div className=" flex justify-start">
                                    <p className="mr-[8px]">New user?</p>
                                    <Link to="/signup" className="font-[700] text-[16px] text-[#fc0000]">Sign up</Link>
                                </div>
                                <Link to="/signup" className="text-[16px] text-blue-700">Forgot password?</Link>
                            </div>
                            
                        </div>


                    </div>
                </div>

            </div>
            {/* Page footer */}
            <Footer />
        </section>
    )
}

export default Login