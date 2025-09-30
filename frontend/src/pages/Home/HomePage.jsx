import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import HomeHero from "./HomeHero"
import FeaturedCourses from "./FeaturedCourses"
import Testimonials from "./Testimonials"

function Homepage() {
    return (
        <div className="HomePage">
            {/* Navbar */}
            <Navbar />
            <HomeHero />
            <div className="mx-[12px] mt-[16px]">
                <h2 className="text-[18px] font-[700]">Top Picks for You</h2>
                <FeaturedCourses />
            </div>
            
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default Homepage