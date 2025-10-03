import LearnersManagementNavbar from "../../components/LearnersManagementNavbar"
import axiosInstance from "../../api/axios"
import { useState, useEffect } from "react"
import { FcAbout } from "react-icons/fc"
import { Link } from "react-router-dom"

function Learners() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get("accounts/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            }) 
    }, [])

    return (
        <section className="Learners">
           <LearnersManagementNavbar/>
            <div className="mx-[12px] ">
                <div className="px-3 py-[10px]  mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <p className="text-[18px]  font-[700]">Our Learners</p>
                </div>
                <div className="mt-[10px] flex justify-between">
                    <div className="flex justify-start space-x-[10px]">
                        <div className="rounded-[6px] bg-green-400 hover:bg-green-600 my-auto mr-[20px]">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Learners</p>
                        </div>
                        <div className="rounded-[6px] bg-green-400 my-auto mr-[20px]">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Instructors</p>
                        </div>
                        <div className="rounded-[6px] bg-green-400 my-auto mr-[20px]">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Managers</p>
                        </div>
                    </div>
                    <div className="rounded-[6px] bg-green-400 my-auto">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Export to file</p>
                    </div>
                </div>
                <div className="px-3 py-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <div className="font-[700] text-[14px] overflow-x-auto w-[100%]">
                        <table className="min-w-full  border-collapse border border-gray-300">
                            <thead className="font-[700] ">
                                <tr className="bg-gray-200 rounded-[10px]">
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">First Name</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">Last Name</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">Username</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">Role</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">Email</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">About</th>
                                </tr>
                            </thead>
                            <tbody className="font-[500]">
                                {loading ? Array.from({ length:10}).map((_, i) => <SkeletonLearners key={i} />)
                                    :users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-200">
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.first_name}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.last_name}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.username}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px] capitalize">{ user.role}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{user.email}</td>
                                        <td className="text-center border border-gray-300 px-4 py-[4px]">
                                            <Link to={`/learners/${user.id}`} className="flex justify-start text-blue-600 hover:underline">
                                                <FcAbout className="my-auto mr-[2px]"/>
                                                <p>{ user.username}</p>
                                            </Link>
                                        </td>
                                    </tr>
                                ))} 
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-start space-x-[30px] font-[500] text-[14px]">
                        
                    </div>
                </div>
                <div className="px-3 pb-2 mt-[16px]">    
                </div>
            </div>
        </section>
    )    
}

function SkeletonLearners() {
    return (
        <tr className="h-[29px] animate-pulse my-[10px]">
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[ppx]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
        </tr>
    )
}

export default Learners