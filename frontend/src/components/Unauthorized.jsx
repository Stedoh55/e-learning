import Navbar from "./Navbar";
import Footer from "./Footer";

function UnauthorizedComponent() {
    return (
        <section>
            <Navbar />
            <div className="Unauthorized font-semibold text-blue-600 text-center">
                <h1 className="text-[120px] text-[#1cdf1c]">403</h1>
                <div className="text-[40px] font-bold text-[#1cdf1c]">Error</div>
                <div className="text-[30px]">You are Unauthorized to perform this action</div>
            </div>
            <Footer/>
        </section>
    )
}

export default UnauthorizedComponent