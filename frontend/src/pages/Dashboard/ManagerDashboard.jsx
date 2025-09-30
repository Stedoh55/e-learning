import AutoDashboard from "../../components/AutoDashboard";
import Footer from "../../components/Footer"

function ManagerDashboard() {
    const [activeTab, setActiveTab] = useState('continuing')
    return (
        <section className="ManagerDashboard">
            <div>
                <AutoDashboard activeTab={activeTab} onChange={setActiveTab}/>
            </div>
            <div>Hello Manager</div>

            <Footer />
       </section>
   ) 
}

export default ManagerDashboard;