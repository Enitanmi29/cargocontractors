import React from 'react'
import { contact1, services1 } from '../constants'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <h1 className='col text-center pt-5'>
                Cargo Contractors
            </h1>
        </div>
        <div className='row text-center rounded'>
            <img
              src='/ship-view.jpeg'
              alt='cargo img'
              className='img-fluid mt-2 rounded'
              style={{maxwidth:'100%', height:'auto'}}
            />
        </div>
        <div>

            {/* About section */}
            <div className='row text-center pt-5'>
              <div className='col'>
                  <h1 className='pb-1'> About Us:</h1>
              </div>
              <div className='row justify-content-center'>
                  <p className='fs-4'> 
                      We are the premier import and export agency in Africa. Our network spreads to different parts of the world.
                  </p>
                  <div className='rounded'>
                      <img
                      src='/ship2.jpg'
                      alt='cargo    '
                      className='img-fluid rounded-5 mb-2 pb-2'
                      />
                  </div>
              </div>
              <hr/>
          </div>

            {/* Services section */}
            <div className=''>
              <h1 className='text-center pt-5'>Our Services:</h1>

              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-4 p-5 mb-4">
                <div className="col d-flex flex-column align-items-start ">
                  <h2 className="fw-bold text-body-emphasis">Import and Export</h2>
                  <p className="text-body-secondary fs-5">We deal with cargo handling.</p>
                  <a href="/services" className="btn btn-success btn-lg">Learn more</a>
                </div>

                <div className="col">
                  <div className="row">
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        {services1.map((prop,index) => (
                          <div className="col d-flex flex-column gap-2" key={index}>
                              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-3 rounded-3">
                                  <svg className="bi" width="1em" height="1em">
                                     <use xlink:href="#collection"></use>
                                  </svg>
                              </div>
                              <h4 class="fw-semibold mb-0 text-body-emphasis">{prop.header}</h4>
                              <p class="text-body-secondary">{prop.paragraph}</p>
                          </div>
                        ))}
                    </div>                   
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="row align-items-md-center g-3 p-5 bg-primary-subtle">
              <h1 className='text-center'>Contact Us: </h1>
    
              <div class="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  {contact1.map((prop,index) => (
                    <div className="col d-flex flex-column gap-2" key={index}>
                      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-3 rounded-3">
                        <svg className="bi" width="1em" height="1em">
                          <use xlink:href="#collection"></use>
                        </svg>
                      </div>
                      <h4 className="fw-semibold mb-0 text-body-emphasis">{prop.header}</h4>
                      <p className="text-body-secondary">{prop.paragraph}</p>
                  </div>
                  ))}
                </div>
              </div>
              <div className='justify-content-center'>
                <Link to='/contact' className='btn btn-success btn-lg'> explore </Link>
              </div>
            </div>
        </div>          
    </div>
  )
}

export default Home