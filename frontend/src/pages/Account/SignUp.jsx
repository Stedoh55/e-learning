import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SignUpImage from "../../assets/img/signup.jpeg"
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <section className="SignUp">
            {/* Page Navbar */}
            <Navbar/>
            
            <div className="mx-[12px] mt-[16px] mb-[16px] rounded-[10px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd]">
                <div className="flex justify-between mx-auto my-3">
                    <div className="w-[50%]">
                        <div className="mx-auto">
                            <img src={SignUpImage} alt="" className="mx-auto"/>
                        </div> 
                    </div>

                    <div className="w-[500px] rounded-[10px] shadow-sm shadow-[#212529] my-[12px] mx-[16px]">
                        <div className="mx-3 my-3">
                            <h2>Create your Account</h2>
                            <h4>Register to create account</h4>
                        </div>
                        <div className=" mx-3">
                            <form action="" className="px-4 py-3 w-full">
                                <div className="mb-3">
                                    <label for="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control shadow border border-dark-subtle" placeholder="Eg. John" name="first_name" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="last_name" class="form-label">Last Name</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Eg. Doe" name="last_name" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control shadow border border-dark-subtle" placeholder="Eg. johndoe@gmail.com" name="email" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Eg. Jdoe" name="username" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="dob" class="form-label">Date of Birth</label>
                                    <input type="date" class="form-control shadow  border border-dark-subtle" placeholder="Date of Birth" name="dob" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                <input type="password" class="form-control shadow  border border-dark-subtle" placeholder="Enter Password" name="password1" required/>
                                </div>
                                <div class="mb-3 mx-auto">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                <input type="password" class="form-control shadow  border border-dark-subtle" placeholder="Confirm Password" name="password2" required/>
                                </div>
                                {/* Sign Up Button */}
                                <div class=" mx-auto">
                                    <button className="w-full rounded-[6px] py-[4px]  bg-blue-700 text-white" type="submit">Sign Up</button>
                                </div> 
                            </form>
                            {/* SignUp footer Links */}
                            <div className="mt-[16px] mx-3 mb-4 flex justify-start">
                                <p className="mr-[8px]">Already have an account?</p>
                               <Link to="/login" className="font-[700] text-[16px] text-[#fc0000]">Sign in</Link>
                            </div>
                        </div>
                        

                    </div>
                </div>

            </div>
            {/* Page footer */}
            <Footer/>
        </section>
    )
}

export default SignUp