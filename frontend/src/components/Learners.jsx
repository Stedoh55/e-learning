import LearnerDashboard from "../pages/Dashboard/LearnerDashboard"
import DashboardAdminNavbar from "./DashboardAdminNavbar"
import DashboardInstructorNavbar from "./DashboardInstructorNavbar"
import DashboardLearnerNavbar from "./DashboardLearnerNavbar"
import AutoDashboard from "./AutoDashboard"

function Learners() {
    return (
        <section className="Learners">
           <DashboardInstructorNavbar/>
            <div className="mx-[12px] ">
                <div className="px-3 pb-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <h2 className="text-[18px] font-[700]">Our Learners</h2>
                </div>
                <div className="px-3 pb-2 mt-[16px] rounded-[10px] border-solid border-[1px]">
                    <table className="">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                       </thead>
                    </table>
                </div>
            </div>
        </section>
    )
    
}

export default Learners