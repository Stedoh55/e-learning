import { useState } from "react";
import DashboardLearnerNavbar from "../../components/DashboardLearnerNavbar";
import AutoDashboard from "../../components/AutoDashboard";
import Footer from "../../components/Footer"
import ContinuingCourses from "../Learners/ContinuingCourses";
import CompletedCourses from "../Learners/CompletedCourses";

function LearnerDashboard() {
    
    // Switch Logic to determine the page to return
    const renderContent = () => {
        switch (activeTab) {
            case 'continuing':
                return < ContinuingCourses />;
            case 'completed':
                return <CompletedCourses />;
            default:
                return <div>Page not found</div>
        }
    }
    return (
        <section className="LearnerDashboard">
            {/* Learner Dashboard with active tabs */}
            <div>
                <DashboardLearnerNavbar activeTab={activeTab} onChange={setActiveTab}/>
            </div>
            
            {/* Learener dashboard page contents */}
            <div>
                {renderContent()}
            </div>
            

            <Footer />
        </section>
    )
}

export default LearnerDashboard;