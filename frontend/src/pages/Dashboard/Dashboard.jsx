import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react"
import InstructorDashboard from "./InstructorDashboard";
import LearnerDashboard from "./LearnerDashboard";
import ManagerDashboard from "./ManagerDashboard";


function Dashboard() {
   

    return (
        <section className="Dashboard">
            <div>
                <DashboardNavbar/>
            </div>
            Hello There
           
            <Footer/>
        </section>
    )
}

export default Dashboard