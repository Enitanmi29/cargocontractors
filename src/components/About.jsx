import React from 'react'

const About = () => {
  return (
    <div>
        <div className='row text-center pt-5 bg-secondary-subtle'>
            <div className='col'>
                <h1 className='pb-1'> About Us:</h1>
            </div>
            <div className='row justify-content-center g-0'>
                <p className='fs-3'> 
                    We are the premier import and export agency in Africa. Our network spreads to different parts of the world.
                </p>
                <div className='row rounded-2 my-4'>
                    <img
                    src='/ship2.jpg'
                    alt='cargo    '
                    className='col-lg-6 img-fluid rounded-circle mb-2 pb-2'
                    />
                    <img
                    src='/IMG-20250316-WA0034.jpg'
                    alt='cargo    '
                    className='col-lg-6 img-fluid rounded-circle mb-2 pb-2'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About