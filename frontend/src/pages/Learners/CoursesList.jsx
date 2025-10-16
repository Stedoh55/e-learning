import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axiosInstance from '../../api/axios'
import { useEffect, useState } from 'react';
import { RiShareForwardLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FaBookOpenReader, FaUserPen } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function CoursesList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [genre, setGenre] = useState("");

    // Fetching the courses
    useEffect(() => {
        axiosInstance.get('/courses/courses')
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error Fetching data:', error);
            });
    }, [])

    // Filtering the courses by genres
    const toggleFilter = (genre) => {
        setGenre(genre)  // Filter  by Genre
    }
    return (
        <section className="CoursesList">
            <Navbar />
            <div className='mt-[12px] mx-[12px]'>
                <div className="px-3 py-[10px]  mt-[16px] bg-gradient-to-l from-[#1cdf1c] to-white rounded-[10px] border-solid border-[1px]">
                    <p className="text-[18px] font-[700] [text-shadow:_1px_1px_3px_rgba(0,0,0,0.4)] ">Our Available Courses</p>
                </div>
                <div className="flex justify-start space-x-[10px] mt-[10px]">
                    <div onClick={() => toggleFilter("")} className={`${genre === "" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="All Users">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">All Courses</p>
                    </div>
                    <div onClick={() => toggleFilter("politics")} className={`${genre === "politics" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Learners">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Politics</p>
                    </div>
                    <div onClick={() => toggleFilter("technology")} className={`${genre === "technology" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Instrutors" >
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Technology</p>
                    </div>
                    <div onClick={() => toggleFilter("public health")} className={`${genre === "public health" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Managers">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Public Health</p>
                    </div>
                    <div onClick={() => toggleFilter("economics")} className={`${genre === "economics" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Managers">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Economics</p>
                    </div>
                    <div onClick={() => toggleFilter("leadership")} className={`${genre === "leadership" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Managers">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Leadership</p>
                    </div>
                    <div onClick={() => toggleFilter("sciences")} className={`${genre === "sciences" ? "bg-[#f00] text-white" : "bg-[#1cdf1c]"} rounded-[6px] cursor-pointer my-auto mr-[20px]`} title="Sort Managers">
                        <p className="my-0 px-[20px] py-[4px] font-[700]">Sciences</p>
                    </div>
                </div>
                <div className="mt-[10px] grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
                                
                                {loading ? Array.from({length: 3}).map((_, i) => <SkeletonCard key={i}/>)
                                    :data.map(course => (
                                        <div className="course-grids flex justify-between relative" key={course.id}>
                                
                                            <div className="w-[40%]  mr-[10px]">
                                                <Link to={`/courses/${course.id}`}>
                                                    <img src={course.cover} alt="" className="rounded-[8px] h-[100%]" />
                                                </Link>
                                                
                                            </div>
                                            <div>
                                                <Link to={`/courses/${course.id}`}>
                                                    <h3 className="text-[18px] font-[700] hover:text-blue-600">{course.name}</h3>
                                                </Link>
                                                
                                                <div className="flex justify-start py-[3px] px-[4px]">
                                                    <FaUserPen className="my-auto mr-[2px] text-blue-500 font-bold text-[10px]" />
                                                    <p className="my-0 text-[8px]">{ course.author}</p>
                                                </div>
                                                <p className="mb-[34px] ">{course.description}</p>
                
                                                <div className="bottomGroup mb-[10px] bottom-0 absolute">
                                                <div className="flex justify-start text-[10px] ">
                                                    <p>{course.genre}<span className="mx-[2px] my-auto">.</span></p>
                                                    <p>{course.language}<span className="mx-[2px] my-auto">.</span></p>
                                                    <p>{course.year}<span className="mx-[2px] my-auto">.</span></p>
                                                    <p>{course.duration} Weeks</p>
                                                </div>
                                                <div className="flex justify-start">
                                                    <div className="bg-blue-500 mr-[10px] flex justify-start py-[3px] rounded-[5px] px-[4px]">
                                                        <RiShareForwardLine className="my-auto mr-[2px] text-white font-bold text-[10px]"/>
                                                        <p className="my-0 text-[8px] font-bold">Share</p>
                                                    </div>
                                                    <div className="bg-blue-500 mr-[10px] flex justify-start py-[3px] rounded-[5px] px-[4px]">
                                                        <CiCirclePlus className="my-auto mr-[2px] text-white font-bold text-[10px]" />
                                                        <p className="my-0 text-[8px] font-bold">Save</p>
                                                    </div>
                                                    <div className="bg-blue-500 flex justify-start py-[3px] rounded-[5px] px-[4px]">
                                                        <FaBookOpenReader className="my-auto mr-[2px] text-white font-bold text-[10px]" />
                                                        <p className="my-0 text-[8px] font-bold">Enroll</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
            </div>
            <Footer/>

        </section>
    )
}
function SkeletonCard() {
    return (
        <div className="animate-pulse relative  flex justify-between h-[185px] course-grids">
            <div className="w-[40%] bg-gray-400 rounded-[8px] mr-[10px]" />
            <div className="w-[60%]">
                <div className="bg-gray-300 h-[40px] "></div>
                <div className="bg-gray-200 h-[20px] mt-[12px]"></div>
                <div className="bg-gray-200 h-[20px] mt-[12px]"></div>

                <div className="mb-[10px] bottom-0 absolute">
                    <div className="flex justify-start">
                        <div className="bg-gray-300 rounded-[5px] mr-[10px] h-[25px] w-[50px]"></div>
                        <div className="bg-gray-300 rounded-[5px] mr-[10px] h-[25px] w-[50px]"></div>
                        <div className="bg-gray-300 rounded-[5px] mr-[10px] h-[25px] w-[50px]"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursesList