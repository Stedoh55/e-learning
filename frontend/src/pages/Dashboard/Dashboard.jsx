import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react"
// import { getCurrentUser } from "../../api/CurrentUser"

function Dashboard() {
    // Fetching the User data
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     getCurrentUser().then(setUser).catch(console.error);
    // }, []);
    // if (!user) return <p>Loading...</p>

    return (
        <section className="Dashboard">
            <div>
                <DashboardNavbar/>
            </div>
            Hello There
            {/* <div>Welcome back {user.first_name} { user.last_name}</div> */}
            {/* Page Footer */}
            <Footer/>
        </section>
    )
}

export default Dashboard