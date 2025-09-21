import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axiosInstance from "../../api/axios";

function CoursesList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/courses/coursesdemocourses')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error Fetching data:', error);
            });
    }, [])
    return (
        <section className="CoursesList">
            <Navbar />
            <div>All Available Courses</div>
            <div className="mt-[10px] grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
                           
                               {data.map(course => (
                                   <div className="course-grids flex justify-between relative" key={course.id}>
                                       
                                       <div>
                                           <h3 className="text-[18px] font-[700]">{course.name}</h3>
                                           <p className="mb-[34px] ">{course.details}</p> 
                                           <img src={course.cover} alt="" />
                                       </div>
                                   </div>
                               ))}
                       </div>
        </section>
    )
}

export default CoursesList;