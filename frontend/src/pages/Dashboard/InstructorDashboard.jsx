import { useState } from "react";
import DashboardInstructorNavbar from "../../components/DashboardInstructorNavbar";
import AutoDashboard from "../../components/AutoDashboard";
import Footer from "../../components/Footer"
import ContinuingCourses from "../Learners/ContinuingCourses";
import CompletedCourses from "../Learners/CompletedCourses";
import CoursesCreation from "../Instructors/CoursesCreation";
import InstructorHome from "../Instructors/InstructorHome";

function InstructorDashboard() {
    const [activeTab, setActiveTab] = useState('instructor home')

    // Switch Logic to determine the page to return
    const renderContent = () => {
        switch (activeTab) {
            case 'course creation':
                return < CoursesCreation />;
            case 'completed':
                return <CompletedCourses />;
            default:
                return <InstructorHome/>
        }
    }
    return (
        <section className="LearnerDashboard">
            {/* Learner Dashboard with active tabs */}
            <div>
                <DashboardInstructorNavbar activeTab={activeTab} onChange={setActiveTab} />
            </div>

            {/* Learener dashboard page contents */}
            <div>
                {renderContent()}
            </div>


            <Footer />
        </section>
    )
}

export default InstructorDashboard;