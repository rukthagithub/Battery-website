import React from 'react'
import Heading from '../common/Heading';

const Dimension = () => {
  return (
    <div className='py-16 space-y-8'>
    <div className='px-4'>
    <Heading title="DIMENSIONS OF OUR BATTERY" description="Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s"/>
    </div>
    <div className='container-ats grid grid-cols-3 gap-2 px-12'>
            <img src='/assets/images/dimOne.png' className='hover:-translate-y-3 duration-200' />
            <img src='/assets/images/dimTwo.png' className='hover:-translate-y-3 duration-200'/>
            <img src='/assets/images/dimThree.png' className='hover:-translate-y-3 duration-200'/>
    </div>
    </div>
  )
}

export default Dimension