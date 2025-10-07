import LearnersManagementNavbar from "../../components/LearnersManagementNavbar"
import axiosInstance from "../../api/axios"
import { useState, useEffect, useRef } from "react"
import { FcAbout, FcAlphabeticalSortingAz,FcAlphabeticalSortingZa } from "react-icons/fc"
import { Link } from "react-router-dom"
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function Learners() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("");
    const [ordering, setOrdering] = useState("");
    const params = {}
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    if (search) params.search = search;
    if (ordering) params.ordering = ordering;
    if (role) params.role = role;
   
    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get("accounts/users", {params})
            setUsers(response.data);
            setLoading(false);
            timeoutTimer()
           
        } catch(error) {
            console.error("Error fetching users:", error);
        }
    }

    // Fetch users when search changes
    useEffect(() => {
        setError(false)
        const delay = setTimeout(() => fetchUsers(), 400);
        return () => clearTimeout(delay);
        
    },[search])

    // Fetch users when ordering or role changes
    useEffect(() => {
        fetchUsers();
    }, [ordering, role])
    
    // Changing ordering icons on onClick
    const toggleOrdering = (field) => {
        if (ordering === field) setOrdering("-" + field)  // Sort Descending
        else setOrdering(field); // Sort Ascending
    }

    // Applying filter by role
    const toggleFilter = (role) => {
        setRole(role)  // Filter  by Role
    }
    // Let timeout timer
    let timeoutTimer = setTimeout(() => {
        if (loading) {
            setError(true);
            setLoading(false);     }

    }, 5000)

    // Exporting data to Excel
    const exportToExcel = () => {
        // Limiting the Export of empty Excel file
        if (!users || users.length === 0) {
            alert("No user data available to export.");
            return;
        }

        // Defining the worksheet data
        const worksheetData = users.map((user, index) => ({
            ID: index + 1,   // Adding the index number for the data rows
            "First name": user.first_name,
            "Last name": user.last_name,
            Username: user.username,
            Role: user.role,
            Email: user.email,
        }))

        // Create a worksheet
        const worksheet = XLSX.utils.json_to_sheet(worksheetData);

        // Create a workbook and add worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "users");

        // Wtite to buffer
        const exelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        })

        // Save file
        const fileData = new Blob([exelBuffer], { type: "application/octet-stream" });
        saveAs(fileData, "E-Learning users.xlsx");
    };

    // Adding Dropdown for the Export button
    function DropdownExport() {

        // Close dropdown when clicking outside
        useEffect(() => {
            function handleClickOutside(event) {
                if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, [])
    }

    return (
        <section className="Learners">
           <LearnersManagementNavbar search={search} setSearch={setSearch}/>
            <div className="mx-[12px] ">
                <div className="px-3 py-[10px]  mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <p className="text-[18px]  font-[700]">Our User Accounts</p>
                </div>
                <div className="mt-[10px] flex justify-between">
                    <div className="flex justify-start space-x-[10px]">
                        <div onClick={() => toggleFilter("")} className={`${role === "" ? "bg-[#f00] text-white" :"bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="All Users">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">All Users</p>
                        </div>
                        <div onClick={() => toggleFilter("learner")} className={`${role === "learner" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Learners">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Learners</p>
                        </div>
                        <div onClick={() => toggleFilter("instructor")} className={`${role === "instructor" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Instrutors" >
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Instructors</p>
                        </div>
                        <div onClick={() => toggleFilter("manager")} className={`${role === "manager" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Managers">
                            <p className="my-0 px-[20px] py-[4px] font-[700]">Managers</p>
                        </div>
                    </div>
                    <div onClick={() => setOpen((prev) => !prev)} className="rounded-[6px] bg-blue-400 my-auto cursor-pointer relative" ref={dropDownRef} >
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Export to file</p>
                        
                            <div className={` ${open? "translate-y-0 opacity-100 max-h-60" : "-translate-y-2 max-h-0 opacity-0"} absolute transition-all duration-300 ease-in-out py-[6px] px-[6px] text-[10px] rounded-[6px] w-full bg-white border shadow-lg`}>
                                <div onClick={exportToExcel} title="Download excel file" className="hover:bg-blue-400">Export as Excel</div>
                                <div className="hover:bg-blue-400">Export as CVS</div>
                            </div>
                    
                    </div>
                    
                </div>
                <div className="px-3 py-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <div className="font-[700] text-[14px] overflow-x-auto w-[100%]">
                        <table className="min-w-full  border-collapse border border-gray-300">
                            <thead className="font-[700] ">
                                <tr className="bg-gray-200 rounded-[10px]">
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">ID</th>
                                    <th>
                                        <div onClick={() => toggleOrdering("first_name")} className="cursor-pointer text-start border flex justify-start border-gray-300 px-4 py-[4px]">
                                            <div>{ordering === "first_name" ? <FcAlphabeticalSortingZa className="h-full" /> : <FcAlphabeticalSortingAz className="h-full" />}</div>
                                            <div>First Name</div>
                                        </div>
                                    </th>
                                    <th>
                                        <div onClick={() => toggleOrdering("last_name")} className="cursor-pointer text-start border flex justify-start border-gray-300 px-4 py-[4px]">
                                            <div>{ordering === "last_name" ? <FcAlphabeticalSortingZa className="h-full" /> : <FcAlphabeticalSortingAz className="h-full" />}</div>
                                            <div className="leading-auto">Last Name</div>
                                        </div>
                                    </th>
                                    <th>
                                        <div onClick={() => toggleOrdering("username")} className="cursor-pointer text-start border flex justify-start border-gray-300 px-4 py-[4px]">
                                            <div>{ordering === "username" ? <FcAlphabeticalSortingZa className="h-full" /> : <FcAlphabeticalSortingAz className="h-full" />}</div>
                                            <div>Username</div>
                                        </div>
                                    </th>
                                    <th>
                                        <div onClick={() => toggleOrdering("role")} className="cursor-pointer text-start border flex justify-start border-gray-300 px-4 py-[4px]">
                                            <div>{ordering === "role" ? <FcAlphabeticalSortingZa className="h-full" /> : <FcAlphabeticalSortingAz className="h-full" />}</div>
                                            <div>Role</div>
                                        </div>
                                    </th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">Email</th>
                                    <th className="text-start border border-gray-300 px-4 py-[4px]">About</th>
                                </tr>
                            </thead>
                            <tbody className="font-[500]">
                                {loading ? Array.from({ length: 10 }).map((_, i) => <SkeletonUsers key={i} />)
                                    : users.map((user, index) => (
                                        <tr key={user.id} className="hover:bg-gray-200">
                                            <td className="text-start border border-gray-300 px-4 py-[4px]">{index + 1}</td>
                                            <td className="text-start border border-gray-300 px-4 py-[4px]">{user.first_name}</td>
                                            <td className="text-start border border-gray-300 px-4 py-[4px]">{user.last_name}</td>
                                            <td className="text-start border border-gray-300 px-4 py-[4px]">{user.username}</td>
                                            <td className="text-start border border-gray-300 px-4 py-[4px] capitalize">{user.role}</td>
                                            <td className="text-start border border-gray-300 px-4 py-[4px]">{user.email}</td>
                                            <td className="text-center border border-gray-300 px-4 py-[4px]">
                                                <Link to={`/learners/${user.id}`} className="flex justify-start text-blue-600 hover:underline">
                                                    <FcAbout className="my-auto mr-[2px]" />
                                                    <p>{user.username}</p>
                                                </Link>
                                            
                                            </td>
                                        
                                        </tr>
                                    ))}
                               
                            </tbody>
                           
                        </table>
                        {/* handling Loading Error After 5seconds */}
                        {(error && !loading && users.length === 0) ? (<div className="text-center mt-[6px]">
                            <p>Error fetching results</p>
                            <button onClick={() => {
                                fetchUsers();
                                setLoading(true);
                                setError(false);
                            }} className="bg-gray-300 py-[4px] px-[20px] mt-[8px] rounded-[10px]">Reload</button>
                        </div>) : ""} 
                        {(users.length === 0 && !loading && !error) ? (<p className="text-center mt-[6px]">No results found for "{search}"</p>) : ""} 
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

function SkeletonUsers() {
    return (
        <tr className="h-[29px] animate-pulse my-[10px]">
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[ppx]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
            <td className="text-start bg-gray-300 border-y-[10px] border-x-[4px] border-gray-100 px-4 py-[4px]"></td>
        </tr>
    )
}
export default Learners