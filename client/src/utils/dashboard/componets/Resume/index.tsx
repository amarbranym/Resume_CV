import React from 'react'
import ResumeHeading from './ResumeHeading'
import Content from './Content'
const Resume = () => {
    return (
        <div className='grid grid-cols-12 gap-4 '>
            <div className=' grid col-span-6 '>
                <ResumeHeading />
                <div className='w-full mt-4  h-[518px]  overflow-auto '>
                    <Content />
                </div>
            </div>
            <div className='grid col-span-6 bg-white rounded-md p-4 '>
                <h2 className='text-2xl'>Preview</h2>
            </div>

        </div>
    )
}

export default Resume
