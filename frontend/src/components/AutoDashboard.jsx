import { useState } from "react";
import DashboardAdminNavbar from "./DashboardAdminNavbar";
import DashboardInstructorNavbar from "./DashboardInstructorNavbar";
import DashboardLearnerNavbar from "./DashboardLearnerNavbar";
import LearnerDashboard from "../pages/Dashboard/LearnerDashboard";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard";


function AutoDashboard({ activeTab, setActiveTab }) {
   
    const role = localStorage.getItem('role')
    if (!role) {
        return <p>No role found</p>
    }
    function dashboard() {
        if (role === 'learner') {
            return <LearnerDashboard activeTab={activeTab} onChange={setActiveTab} />
        } else if (role === 'instructor') {
            return <InstructorDashboard activeTab={activeTab} onChange={setActiveTab} />
        } else if (role === 'manager') {
            return <DashboardAdminNavbar activeTab={activeTab} onChange={setActiveTab} />
        }
    }
    return (
        <div>{dashboard()}</div>
    )
}

export default AutoDashboard;