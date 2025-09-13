import { useEffect, useState } from "react"
import axiosInstance from "../../api/axios"

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
                        <div className="course-grids relative" key={course.id}>
                            <h3 className="text-[18px] font-[700]">{course.name}</h3>
                            <p className="mb-[16px]">{course.description}</p>
                            <p className="text-[10px] text-red-500 mb-3 bottom-0 absolute">Created date: {course.created_at}</p>
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default FeaturedCourses