import React from 'react';
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

import {motion} from 'framer-motion'
import { fadeIn } from '../../common/motionFrameVarients';

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Student will always our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an important skil",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code you way to a solution",
    },

]

function TimelineSection() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-18 mb-20 items-center'>

                <motion.div
                variants={fadeIn('right', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className='lg:w-[45%] flex flex-col gap-10 lg:gap-3'>
                    {timeline.map((ele, i) => {
                        return (
                            <div className="flex flex-col lg:gap-3" key={i}>
                                <div className="flex gap-6" key={i}>
                                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                        <img src={ele.Logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px]">{ele.heading}</h2>
                                        <p className="text-base">{ele.Description}</p>
                                    </div>
                                </div>
                                <div
                                    className={`hidden ${timeline.length - 1 === i ? "hidden" : "lg:block"
                                        }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                ></div>
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className='relative shadow-[0px_0px_30px_0px] shadow-blue-200'>
                    <img src={TimeLineImage} alt='timelineImage' className='shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit' />

                    <div className='absolute bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[-50%] gap-4 lg:gap-0 lg:py-10 rounded-2xl'>
                        <div className='flex flex-row gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14'>
                            <p className='text-3xl font-bold w-[75px]'>10</p>
                            <p className='text-caribbeangreen-300 text-sm w-[75px]'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7 lg:px-14'>
                        <p className='text-3xl font-bold w-[75px]'>250</p>
                            <p className='text-caribbeangreen-300 text-sm w-[75px]'>Type Of Courses</p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TimelineSection