import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div>
        <h1 className='text-center pt-5'>Our Services:</h1>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 p-5">

            <div class="col col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-items-start gap-2">
                <h2 class="fw-bold text-body-emphasis">Import and Export</h2>
                <p class="text-body-secondary fs-5">We deal with cargo handling.</p>
                <a href="https:whatsapp.com/dl/" class="btn btn-success btn-lg">Learn more</a>
            </div>

            <div class="col">
                <div class="row row-cols-1 row-cols-sm-2 g-4">
                    {services.map((prop,index) => (
                        <div class="col d-flex flex-column gap-2" key={index}>
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-3 rounded-3">
                                <svg class="bi" width="1em" height="1em">
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
  )
}

export default Services