import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer"

function InstructorDashboard() {
    return (
        <section className="InstructorDashboard">
            <div>
                <DashboardNavbar />
            </div>
            <div>Hello Instructor</div>

            <Footer />
        </section>
    )
}

export default InstructorDashboard;