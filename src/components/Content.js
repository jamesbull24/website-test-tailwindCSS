import React from 'react'
import ImageOne from '../images/videographer2.jpg'
import ImageTwo from '../images/videographer2.jpg'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={ImageOne} alt="videographer" className="h-full rounded mb-20 shadow"/>
            <div className='flecx flex-col justify-center items-center'>
                <h2 className='text-2xl'>Videography done right</h2>
            </div>
        </div>
    )
}

export default Content
