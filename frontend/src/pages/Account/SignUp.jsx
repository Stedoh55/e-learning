import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SignUpImage from "../../assets/img/signup.jpeg"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { LearnerSignup } from "../../services/AuthService"
import { useState } from "react"
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password1: "",
        password: "",
        date_of_birth: "",
        role: "learner"  //Default
    });

    const [message, setMessage] = useState()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await LearnerSignup(formData);
            setMessage("Account Successful Created")
            navigate("/login")
        } catch (error) {
            const dat = `${JSON.stringify(error)}`
            const messages = []
            for (const key in dat) {
                if (Array.isArray(dat[key])) {
                    errors[key].forEach((msg) => messages.push(msg));
                } else {
                    messages.push(dat[key])
                }
            }
            setMessage(dat.errors || dat )
        }
    };

    const [passwordToggle, setPasswordToggle] = useState(false);
    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle);
    }
    const [confirmPassword, setConfirmPasswordToggle] = useState(false);
    const confirmPasswordToggle = () => {
        setConfirmPasswordToggle(!confirmPassword);
    }

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
                            <form onSubmit={handleSubmit} className="px-4 py-3 w-full">
                                <div className="mb-3">
                                    <label for="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control shadow border border-dark-subtle" placeholder="Eg. John" name="first_name" value={formData.first_name} onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label for="last_name" class="form-label">Last Name</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Eg. Doe" name="last_name" value={formData.last_name} onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control shadow border border-dark-subtle" placeholder="Eg. johndoe@gmail.com" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control shadow border border-dark-subtle" placeholder="Eg. Jdoe" name="username" value={formData.username} onChange={handleChange} required/>
                                </div>
                                <div class="mb-3">
                                    <label for="date_of_birth" class="form-label">Date of Birth</label>
                                    <input type="date" class="form-control shadow  border border-dark-subtle" placeholder="Date of Birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required/>
                                </div>
                                <div class="mb-3">
                                    <label for="password1" class="form-label"><strong>Password</strong></label>
                                    <div className="form-control  border border-dark-subtle">
                                        <div className="flex justify-between">
                                            <input type={passwordToggle ? 'text' : 'password'} className=" block w-[90%] border-none outline-none" placeholder="Enter Password" name="password1" value={formData.password1} onChange={handleChange} required />
                                            <div className="block m-auto text-[20px]" onClick={handlePasswordToggle}>
                                                {passwordToggle ? (<AiFillEyeInvisible />) : <IoEye />}
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div class="mb-3 mx-auto">
                                    <label for="password" class="form-label"><strong>Password</strong></label>
                                    <div className="form-control  border border-dark-subtle">
                                        <div className="flex justify-between">
                                            <input type={confirmPassword ? 'text' : 'password'} className=" block w-[90%] border-none outline-none" placeholder="Confirm Password" name="password" value={formData.password} onChange={handleChange} required />
                                            <div className="block m-auto text-[20px]" onClick={confirmPasswordToggle}>
                                                {confirmPassword ? (<AiFillEyeInvisible/>) : <IoEye/>}
                                            </div> 
                                        </div>   
                                    </div>    
                                </div>
                                <div className="mb-3 mx-auto text-[12px] text-red-600">
                                    <p>{ message}</p>
                                </div>
                                {/* Sign Up Button */}
                                <div class=" mx-auto">
                                    <button className="w-full rounded-[6px] py-[4px]  bg-blue-700 text-white active:scale-90 transition-all duration-100 ease-out" type="submit">Sign Up</button>
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