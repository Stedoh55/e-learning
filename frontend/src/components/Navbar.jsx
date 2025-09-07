import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleFill, PiGraduationCap } from "react-icons/pi";
import { LuNotebookText } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section className="Navbar sticky top-0 z-50 bg-white text-bg-light p-2 pd-4 border-solid border-[0.5px] border-[#adb5bd] mx-0 border-bottom">
            <div>
                {/* Top Links */}
                <div className=" flex justify-between">
                    <div className="flex justify-evenly gap-[10px]">
                        <h5 className="text-[12px]">Currency</h5>
                        <h5 className="text-[12px]">Language</h5>
                    </div>
                    <div className="flex justify-evenly gap-[10px]">
                        <h5 className="text-[12px]">Support</h5>
                        <h5 className="text-[12px]">Delivery</h5>
                        <h5 className="text-[12px]">Warranty</h5>
                    </div>
                </div>
                {/* Mid-Links */}
                <div id="mid-navbar" className="flex justify-between mt-[10px]">
                    <div id="logo-name" className="flex justify-start" >
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <h3 className="text-[33px] font-[700]">FreshCart</h3>
                    </div>
                    {/* Search section */}
                    <div id="search-section" className="input-group flex justify-start h-[40px] w-[45vw] rounded-[6px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd]">
                        <input type="text" className="w-[85%] px-[8px] text-[16px] outline-0 border-0 overflow-hidden" placeholder="Search for Products" aria-label="products search" aria-describedby="button-addon2"/>
                        <button id="button-addon2" className="text-white font-[700] text-[18px] bg-[#1cdf1c] w-[15%] h-full" type="button">Search</button>
                    </div>
                    {/* Icons Panel */}
                    <div id="icons" className="flex py-0 justify-evenly">
                        <div id="notification-block" class="mr-3 my-auto w-fit">
                            <IoMdNotificationsOutline className=" text-[24px] font-[700] my-auto w-full"/>
                            <p className="text-[16px] font-[700] mb-0">Notification</p>
                        </div>
                        <div id="signout-block" class="mr-3 my-auto w-fit">
                            <PiUserCircleFill className=" text-[24px] font-[700] my-auto w-full" />
                            <p className="text-[16px] font-[700] mb-0">Sign out</p>
                        </div>
                        <div id="Orders-block" class="mr-3 my-auto w-fit">
                            <LuNotebookText className=" text-[24px] font-[700] my-auto w-full" />
                            <p className="text-[16px] font-[700] mb-0">My Orders</p>
                        </div>
                        <div id="Learners-block" class="mr-3 my-auto w-fit">
                            <PiGraduationCap className=" text-[24px] font-[700] my-auto w-full" />
                            <p className="text-[16px] font-[700] mb-0">Learners</p>
                        </div>
                    </div>
                </div>
                {/* Lower links */}
                <div className="LowerLinks flex justify-start">
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">All Categories</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Home</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Continuing</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">All Categories</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Completed</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">All Courses</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Assignments</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Account</Link>
                    </div>
                    <div className="mr-3 mt-2">
                        <Link to="/" className="navbar-lowerlinks">Docs</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Navbar