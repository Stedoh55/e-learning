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
            <FeaturedCourses />
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default Homepage