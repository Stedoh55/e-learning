import heroImage from "../../assets/img/heroImage.jpeg"
import heroBanner from "../../assets/img/heroBanner.png"

function HomeHero() {
    return (
        <section className="HomeHero bg-no-repeat mx-[12px] mt-[16px] rounded-[10px] bg-cover h-[300px]" style={{backgroundImage: `url(${heroImage})`}}>
            <div className="flex justify-between">
                <div className="mx-3 my-5 w-[50%]">
                    <h1 className="text-[28px] text-[#008000] font-[700] ">"Learn Anything, Anytime, Anywhere"</h1>
                    <h2 className="mt-[18px] text-[20px]">Join Thousands of Learners and Instructors shaping the future of the education.</h2>
                    <div className=" text-[20px] mt-[24px]">
                        <h2>Explore Courses</h2>
                        <h2 className="mt-[10px]">Become Instructor</h2>
                    </div>
                </div>
                <div className="HeroBanner">
                    <div className="h-[300px] mx-[100px]">
                        <img src={heroBanner} className="h-full" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
           
    )
}
export default HomeHero;