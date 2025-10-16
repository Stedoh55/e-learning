import { useState, useEffect } from "react"
import CircularProgress from "../../components/CircularProgress"

function InstructorHome() {
    const progress = 10
    const leaners = 86
    const course = 28

    return (
        <section className="InstuctorHome mx-[12px]">
            <div className="px-3 py-[10px]  mt-[16px] bg-gradient-to-l from-[#1cdf1c] to-white rounded-[10px] border-solid border-[1px]">
                <p className="text-[18px] font-[700] [text-shadow:_1px_1px_3px_rgba(0,0,0,0.4)] ">Welcome Back Instructor!</p>
            </div>
            <div className="flex justify-between mt-[14px]">
                <div className="w-[70%]">
                    <div className="grid grid-cols-3 gap-x-[30px]">
                        <div className="rounded-[10px] bg-[#e8f0fe] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd] p-[4px]">
                            <div className="flex justify-center">
                                <CircularProgress percentage={progress} showBlink={false} symbol="%" />
                            </div>
                            <div className="flex justify-center text-[16px] font-[700]">Course Creation</div>  
                        </div>
                        <div className="rounded-[10px] bg-[#e8f0fe] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd] p-[4px]">
                            <div className="flex justify-center">
                                <CircularProgress percentage={leaners} showBlink={true} symbol="+" />
                            </div>
                            <div className="flex justify-center text-[16px] font-[700]">New Learners</div>
                        </div>
                        <div className="rounded-[10px] bg-[#e8f0fe] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd] p-[4px]">
                            <div className="flex justify-center">
                                <CircularProgress percentage={course} showBlink={true} symbol="%" />
                            </div>
                            <div className="flex justify-center text-[16px] font-[700]">Course Finishers</div>
                        </div>
                    </div>
                    <div className="h-fit mt-[30px] rounded-[10px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd] p-[4px]">
                        <h2>Hello There</h2>
                        
                    </div>
                </div>
                <div className="rounded-[10px] shadow-sm shadow-[#212529] border-solid border-[0.5px] border-[#adb5bd] p-[4px] w-[25%] h-[280px]">
                    Right
                </div>
            </div>
            <div className="mt-[30px] rounded-[10px] border-solid border-[1px] p-[4px]">
                <h2>Hello There</h2>
                <h2>Hello There</h2>
                <h2>Hello There</h2>
                Hello Everyone
            </div>
        </section>
    )
}

export default InstructorHome;