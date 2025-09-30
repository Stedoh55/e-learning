import LearnersManagementNavbar from "../../components/LearnersManagementNavbar"
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axios"
import { useParams } from "react-router-dom"

function LearnerDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axiosInstance.get(`accounts/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.error(err));
    }, [id]);
if (!user) return <p>Loading...</p>

    return (
        <section>
            <LearnersManagementNavbar/>
            <div className="mt-[14px]">
                Learner Details
                <p>{user.username}</p>
                <p>{user.bio}</p>
            </div>
        </section>
    )
}

export default LearnerDetails