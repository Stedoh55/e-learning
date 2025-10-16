import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { redirect } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SignUpImage from "../../assets/img/signup.jpeg"
import { Link } from "react-router-dom"
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { ImSpinner6 } from "react-icons/im";
import axiosInstance from "../../api/axios"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, SetLoading] = useState(false);
    const navigate = useNavigate()     //For handling redirect after succssful login

    const [passwordToggle, setPasswordToggle] = useState(false);
    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle);
    }

    const handleLogin = async (e) => {
        SetLoading(true);
        setError("");  //Clear the previous error
        e.preventDefault();
        try {
            const response = await axiosInstance.post("accounts/login", {
                username,
                password,
            });
            console.log(response.data);

            // Clearing the previous local storage role data
            localStorage.removeItem("role");

            // Save tokens in the localstorage
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            // Save the role in the localstorage
            localStorage.setItem("role", response.data.role);

            // Navigating to dashboard Page
            navigate("/dashboard")

        } catch (err) {
            setError("Invalid Username or Password");
            SetLoading(false);
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
                        <div className="mx-3 px-4 py-2 my-3 bg-gradient-to-l from-[#1cdf1c] border-[#1cdf1c] border-[0.2px] rounded-t-[8px]">
                            <p className="text-[22px] font-[700]">Welcome Back</p>
                            <p>Please Login to your account</p>
                        </div>
                        <div className=" mx-3">
                            <form onSubmit={handleLogin} className="px-4 w-full">
                                <div class="mb-3">
                                    <label for="username" className="form-label font-[700]">Username</label>
                                    <input type="text" class="form-control  border border-gray-400 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 shadow-gray-300 shadow-sm transition-all duration-300"
                                        placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                    <div className="form-control  border border-gray-400 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 shadow-gray-300 shadow-sm transition-all duration-300">
                                        <div className="flex justify-between ">
                                            <input type={passwordToggle ? 'text' : 'password'} className=" block w-[90%] border-none outline-none " placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
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
                                
                                {/* Sign in Button */}
                                <div class=" mx-auto">
                                    <button className={`${loading ? 'bg-blue-500' : 'bg-blue-700'} w-full rounded-[6px] py-[4px] border-none outline-none   text-white active:scale-90 transition-all duration-100 ease-out`} type="submit">
                                        {loading ?
                                            <div className="flex justify-center">
                                                <ImSpinner6  className="my-auto mr-[10px] animate-spin"/>
                                                <p>Logging in ..</p>
                                            </div>
                                            : "Login"}
                                    </button>
                                </div>

                                <div className="my-3 mx-auto text-[14px] font-[600] text-[#fc0000]">
                                    <p>{error}</p>
                                </div>
                            </form>   
                        </div>
                        {/* SignUp footer Links */}
                        <div className="border-solid border-gray-400 border-[2px] mx-3"></div>
                        <div className="mb-4 mt-[8px] mx-3 px-3 py-2 bg-gray-300 rounded-b-[8px]">
                            
                            <div className=" flex justify-start">
                                <p className="mr-[8px]">New user?</p>
                                <Link to="/signup" className="font-[700] text-[16px] text-[#fc0000]" title="Sign up">Sign up</Link>
                            </div>
                            <Link to="/signup" className="text-[16px] text-blue-700" title="Forgot password">Forgot password?</Link>
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