import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "../../components/Loader"
import axiosInstance from "../../api/axios"

function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axiosInstance.get(`courses/courses/${id}`)
            .then((response) => setCourse(response.data))
            .catch((err) => console.error(err));
    }, [id]);
    if (!course) return <Loader />

    return (
        <section className="CourseDetails">
            <Navbar/>
            <div className="mt-[10px] mx-[12px]">
                <div className="px-3 py-[10px] bg-gradient-to-l from-[#1cdf1c] to-white mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <p className="text-[18px]   font-[700]">Welcome to the Course</p>
                </div>
                <div className="flex justify-between mt-[18px]">
                    <div className="border p-[10px]  rounded-[10px] w-[60%]">
                        <div className="bg-blue-600 rounded-t-[6px]">
                            <p className="text-[22px]  font-[700] leading-auto">{course.name}</p>
                            <p>Authored by {course.author}</p>
                        </div>
                        
                        <div className="">
                            <p className="text-[16px] font-[700]">Course Descriptions</p>
                            <p>{course.description }</p>
                        </div>
                        <div>
                            <p>Enroll in this couuse and become successful in only { course.duration} weeks</p>
                        </div>
                    </div>
                    <div className="border rounded-[10px] w-[36%] p-[10px]">
                        <div className="h-[250px] w-full">
                            <img src={course.cover} alt="" className="rounded-[14px] h-[100%] w-[100%]"/>
                        </div>
                        <div className="border mt-[10px] bg-[#1cdf1c] rounded-[6px]">
                            <p className="py-[4px] text-[16px] text-center">Enroll Today</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Gain the valuable skills by enrolling in this course</p>
                </div> 
            </div>
            <Footer/>
        </section>
    )
}
export default CourseDetails