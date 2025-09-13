import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SignUpImage from "../../assets/img/signup.jpeg"
import { Link } from "react-router-dom"

function Login() {
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
                            <form action="" className="px-4 py-3 w-full">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Enter Username" name="username" required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                    <input type="password" class="form-control shadow  border border-dark-subtle" placeholder="Enter Password" name="password1" required />
                                </div>
                                <div className="mb-3 flex justify-start">
                                    <input type="checkbox" className="mr-[8px]" />
                                    <label for="checkbox" className="font-[300]">Remember me</label>
                                </div>
                                {/* Sign Up Button */}
                                <div class=" mx-auto">
                                    <button className="w-full rounded-[6px] py-[4px]  bg-blue-700 text-white" type="submit">Login</button>
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