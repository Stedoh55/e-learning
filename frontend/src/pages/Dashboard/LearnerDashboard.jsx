import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer"

function LearnerDashboard() {
    return (
        <section className="LearnerDashboard">
            <div>
                <DashboardNavbar />
            </div>
            <div>Hello Learner</div>

            <Footer />
        </section>
    )
}

export default LearnerDashboard;