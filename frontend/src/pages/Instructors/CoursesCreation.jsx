import { useEffect, useState } from "react";
import {FaCirclePlus} from 'react-icons/fa6'

function CoursesCreation() {
    return (
        <section className="CoursesCreation mx-[12px] ">
            <div className="px-5 pb-2 mt-[14px] rounded-[10px] border-solid border-[1px]">
                <h2 className="text-[18px] font-[700]">Create New Course Today</h2>
                <div className="flex justify-start">
                    <FaCirclePlus className="mr-2 text-[18px]"/>
                    <p className="text-[12px] ">Create Course</p>
                </div>
            </div>
        </section>
    )
}

export default CoursesCreation;