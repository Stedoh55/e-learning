import { useEffect, useState } from "react"
import axiosInstance from "../../api/axios"
import { RiShareForwardLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FaBookOpenReader, FaUserPen } from "react-icons/fa6";

function FeaturedCourses() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
    return (
        <section className="FeaturedCourses">
            
            <div className="mt-[10px] grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
                
                {loading ? Array.from({length: 3}).map((_, i) => <SkeletonCard key={i}/>)
                    :data.map(course => (
                        <div className="course-grids flex justify-between relative" key={course.id}>
                
                            <div className="w-[40%]  mr-[10px]">
                                <img src={course.cover} alt="" className="rounded-[8px] h-[100%]" />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-[700]">{course.name}</h3>
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
        </section>
    )
}
function SkeletonCard() {
    return (
        <div className="animate-pulse relative  flex justify-between h-[185px] course-grids">
            <div className="w-[40%] bg-gray-400 rounded-[8px] mr-[10px]"/>
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

export default FeaturedCourses