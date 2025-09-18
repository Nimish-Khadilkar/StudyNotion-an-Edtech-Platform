import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText';
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from "react-icons/fa"
import {motion} from "framer-motion"
import { scaleUp } from '../../common/motionFrameVarients';

function InstructorSection() {
  return (
    <div>

      <div className='flex flex-col lg:flex-row gap-20 items-center'>

        <motion.div
        variants={scaleUp}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className='lg:w-[50%] mt-10'>
          <img src={Instructor} alt="" className='shadow-white shadow-[20px_20px_0_0]'/>
        </motion.div>

        <div className='lg:w-[50%] flex flex-col gap-10'>
          <div className='text-4xl font-semibold lg:w-[50%]'>
            Become an
            <HighlightText text={"Instructor"} />
          </div>

          <p className='font-medium text-[16px] text-justify w-[90%] text-richblack-300'>
            Instructors from around the would teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex gap-3 items-center'>
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection