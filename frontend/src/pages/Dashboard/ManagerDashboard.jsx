import AutoDashboard from "../../components/AutoDashboard";
import Footer from "../../components/Footer"
import ManagerHome from "../Admin/ManagerHome";
import DashboardAdminNavbar from "../../components/DashboardAdminNavbar";

function ManagerDashboard() {
    const [activeTab, setActiveTab] = useState('manager home')

    // Switch Logic to determine the page to return
    const renderContent = () => {
        switch (activeTab) {
            case 'manager home':
                return < ManagerHome />;
            default:
                return <ManagerHome />
        }
    }
    return (
        <section className="ManagerDashboard">
            <div>
                <DashboardAdminNavbar activeTab={activeTab} onChange={setActiveTab}/>
            </div>
            {/* Learener dashboard page contents */}
            <div>
                {renderContent()}
            </div>
            <div>Hello Manager</div>

            <Footer />
       </section>
   ) 
}

export default ManagerDashboard;