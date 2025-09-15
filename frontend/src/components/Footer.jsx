import { Link } from "react-router-dom"
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa6"

function Footer() {
    return (
        <section className="Footer mx-[12px] p-5 mt-[16px] mb-[16px] rounded-[10px] bg-[#e8f0fe] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd]">
            <div className="flex justify-between ">
               
                <div className="">
                    <h2 className="text-[18px] mb-[8px]">FreshCart</h2>
                    <Link className="footer-links">About us</Link>
                    <Link className="footer-links">Leadership</Link>
                    <Link className="footer-links">Supporters</Link>
                    <Link className="footer-links">Blog</Link>
                    <Link className="footer-links">Jobs</Link>
                    <Link className="footer-links">Contact us</Link>
                </div>
                <div className="">
                    <h2 className="text-[18px] mb-[8px]">Take Action</h2>
                    <Link className="footer-links">Donate</Link>
                    <Link className="footer-links">Start a fundriser</Link>
                    <Link className="footer-links">Supporters</Link>
                    <Link className="footer-links">Resources</Link>
                    <Link className="footer-links">Student Toolkit</Link>
                    <Link className="footer-links">Become Board Member</Link>
                    <Link className="footer-links" to="/signup">Sign Up Today</Link>
                </div>
                <div className="">
                    <h2 className="text-[18px] mb-[8px]">Programes</h2>
                    <Link className="footer-links">About us</Link>
                    <Link className="footer-links">Leadership</Link>
                    <Link className="footer-links">Supporters</Link>
                    <Link className="footer-links">Blog</Link>
                    <Link className="footer-links">Jobs</Link>
                    <Link className="footer-links">Contact us</Link>
                </div>
               
                <div className="w-[40%]">
                    <h2 className="text-[18px] mb-[6px]">Join The FreshCart's Movement</h2>
                    <h4 className="text-[14px] font-[700]">Subscribe to our mailing list</h4>
                    <div className="input-group mt-[8px] flex justify-start h-[40px] rounded-[6px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd]">
                        <input type="text" className="w-[85%] px-[8px] text-[16px] outline-0 border-0 overflow-hidden" placeholder="Email" aria-label="products search" aria-describedby="button-addon2" />
                        <button id="button-addon2" className="text-white text-[18px] bg-[#1cdf1c] w-[15%] h-full active:scale-90 transition-all duration-100 ease-out" type="button">JOIN</button>
                    </div>
                    <h2>CONNECT</h2>
                    <div className="flex justify-start mt-[4px]">
                        <FaFacebook className="text-[24px] mr-[14px]" />
                        <FaXTwitter className="text-[24px] mr-[14px]" />
                        <FaInstagram className="text-[24px] mr-[14px]" />
                        <FaYoutube className="text-[24px] mr-[14px]" />
                        <FaLinkedin className="text-[24px] mr-[14px]" />
                        <FaTelegram className="text-[24px] mr-[14px]" />
                    </div>
                </div>
            </div>
            <div className="mt-2 h-[2px] bg-[#1cdf1c]"></div>
            <div class="flex  justify-start">
                <a className="block footer-links " href="#">Terms & Conditions</a>
                <a className="block footer-links mx-3" >|</a>
                <a className="block footer-links"  href="#">Privacy policy</a>
            </div>
        </section>
    )
}
export default Footer