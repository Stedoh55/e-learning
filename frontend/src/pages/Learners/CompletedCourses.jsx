import FeaturedCourses from "../Home/FeaturedCourses"

function CompletedCourses() {
    return (
        <section className="CompletedCourses mx-[12px]  ">
            <div className="p-5 mt-[14px] mb-[16px] rounded-[10px] border-solid border-[1px]">
                <h1 className="text-[24px] font-[700]">You don't have Completed courses yet</h1>
                <h4>Your Completed Courses will be listed here</h4>
            </div>
            <div>
                <h2 className="text-[18px] font-[700]">Enroll in our courses</h2>
                <div>
                    <FeaturedCourses/>
                </div>
            </div>
        </section>
    )
}

export default CompletedCourses