import LearnersManagementNavbar from "../../components/LearnersManagementNavbar"
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { PiUserCircleFill } from "react-icons/pi";
import Footer from "../../components/Footer"
import Loader from "../../components/Loader"

function LearnerDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axiosInstance.get(`accounts/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.error(err));
    }, [id]);
    if (!user) return <Loader/>

    return (
        <section className="">
            <LearnersManagementNavbar/>
            <div className="mt-[14px] mx-[12px]">
                <div className="flex justify-start">
                    <Link to="/accounts" className="rounded-[6px] bg-green-400 my-auto mr-[20px]">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Back</p>
                    </Link>
                    <p className="capitalize my-auto font-[700] text-[20px]">{user.role} details</p>
                    
                </div>
                <div className="flex justify-between mt-[16px]">
                    <div className="w-[60%]">
                        <div className="rounded-full ml-[75px] -mb-[20px] relative w-[100px] h-[100px] z-[20] bg-amber-300">
                            <PiUserCircleFill className="relative w-full h-full"/>
                        </div>
                        <div className="rounded-[10px] border-solid border-[.5px] py-[4px] px-[6px]">
                            <div className="mt-[20px] mx-[14px]">
                                <div className="w-[200px] mt-[30px]">
                                    <h2 className="text-center mt-[30px] leading-0 font-[700] text-[20px] ml-[16px]">{user.first_name} {user.last_name}</h2>
                                    <p className="text-center italic text-blue-600 mt-[6px]">{user.username}</p>
                                </div>
                                
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[37%] rounded-[10px] border-solid border-[.5px] p-[6px]">
                        <h2 className="leading-0 font-[700]">About { user.first_name}</h2>
                        <div className="flex justify-start space-x-[4px] mt-[10px]">
                            <p className="font-[700]">Email:</p>
                            <p>{ user.email}</p>
                        </div>
                        <div className="flex justify-start space-x-[4px] mt-[4px]">
                            <p className="font-[700]">Role:</p>
                            <p className="capitalize">{user.role}</p>
                        </div>
                        <div className="flex justify-start space-x-[4px] mt-[4px]">
                            <p className="font-[700]">Date of Birth:</p>
                            <p>{user.date_of_birth}</p>
                        </div>
                        <div className="flex justify-end space-x-[4px] mt-[8px]">
                            <Link to="/" className="rounded-[8px] bg-amber-400 px-[10px] py-[4px]">
                            <p className="text-blue-600 font-[700]">Edit Details</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </section>
    )
}

export default LearnerDetails