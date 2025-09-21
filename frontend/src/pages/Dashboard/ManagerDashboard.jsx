import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer"

function ManagerDashboard() {
    
    return (
        <section className="ManagerDashboard">
            <div>
                <DashboardNavbar />
            </div>
            <div>Hello Manager</div>

            <Footer />
       </section>
   ) 
}

export default ManagerDashboard;