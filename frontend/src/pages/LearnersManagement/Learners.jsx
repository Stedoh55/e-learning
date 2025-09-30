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
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            })
            .finally(() => {
                setLoading(false);
        })
    }, [])

    if (loading) return <p>Loading users...</p>;
    return (
        <section className="Learners">
           <LearnersManagementNavbar/>
            <div className="mx-[12px] ">
                <div className="px-3 pb-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <h2 className="text-[18px] font-[700]">Our Learners</h2>
                </div>
                <div className="px-3 py-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <div className="font-[700] text-[14px]">
                        <table className="min-w-full  border-collapse border border-gray-300">
                            <thead className="font-[700]">
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
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-100">
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.first_name}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.last_name}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.username}</td>
                                        <td className="text-start border border-gray-300 px-4 py-[4px]">{ user.role}</td>
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

export default Learners