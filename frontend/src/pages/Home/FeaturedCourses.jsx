import { useEffect, useState } from "react"
import axiosInstance from "../../api/axios"
import { RiShareForwardLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FaBookOpenReader, FaUserPen } from "react-icons/fa6";

function FeaturedCourses() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/courses/courses')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error Fetching data:', error);
            });
    }, [])
    return (
        <section className="FeaturedCourses mx-[12px] mt-[16px]">
            <h2 className="text-[18px] font-[700]">Top Picks for You</h2>
            <div className="mt-[10px] grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
                
                    {data.map(course => (
                        <div className="course-grids flex justify-between relative" key={course.id}>
                
                            <div className="w-[40%]  mr-[10px]">
                                <p className="rounded-[8px] h-[100%] bg-green-500">Picture</p>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-[700]">{course.name}</h3>
                                <div className="flex justify-start py-[3px] px-[4px]">
                                    <FaUserPen className="my-auto mr-[2px] text-blue-500 font-bold text-[10px]" />
                                    <p className="my-0 text-[8px]">{ course.author}</p>
                                </div>
                                <p className="mb-[34px] ">{course.description}</p>

                                <div className="bottom group mb-[10px] bottom-0 absolute">
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
export default FeaturedCourses