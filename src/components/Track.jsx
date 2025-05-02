import React, { useState } from 'react'

const Track = () => {
    const [formData, setFormData] = useState({
            cargo:'',
            number:'',

    });

    const [error, setError] = useState('');
    
    const cargoDatabase = {
      dhl: 'https://www.dhl.com/global-en/home/tracking.html?trackingNumber=',
      fedex: 'https://www.fedex.com/fedextrack/?trknbr=',
      ups: 'https://www.ups.com/track?tracknum=',
      maersk: 'https://www.maersk.com/tracking/?trackingNumber=',
      hapaglloyd: 'https://www.hapag-lloyd.com/en/online-business/track/track-by-booking.html?bl=',
      cmacgm: 'https://www.cma-cgm.com/ebusiness/tracking?SearchBy=Container&Reference=',
      msc: 'https://www.msc.com/track-a-shipment?shipRefType=container&shipRefNumber=',
      cosco: 'https://elines.coscoshipping.com/ebusiness/cargoTracking?trackingType=container&number=',
      evergreen: 'https://www.evergreen-line.com/tps/service/Tracking.jsp?type=C&number=',
      one: 'https://ecomm.one-line.com/one-ecom/containerTracking?bookingRef=',
      yangming: 'https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx?trackNumbers=',
      zim: 'https://www.zim.com/tools/track-a-shipment?refType=Container&refNumber=',
      nyk: 'https://www.nykline.com/english/service/container/tracking/track.htm?cntr_no=',
      amazon: 'https://www.amazon.com/progress-tracker/package/'
    }

    const cargoAliases = {
      'mediterranean shipping company': 'msc',
      'maersk': 'maersk',
      'dhl': 'dhl',
      'fedex': 'fedex',
      'ups': 'ups',
      'maersk': 'maersk',
      'hapag lloyd': 'hapaglloyd',
      'hapag-lloyd': 'hapaglloyd',
      'cma cgm': 'cmacgm',
      'msc': 'msc',
      'cosco': 'cosco',
      'evergreen': 'evergreen',
      'one': 'one',
      'yang ming': 'yangming',
      'zim': 'zim',
      'nyk': 'nyk',
      'amazon': 'amazon'
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const cargoName = formData.cargo.trim().toLowerCase();
        const cargoKey = cargoAliases[cargoName];

        const trackingNumber = formData.number.trim().toLowerCase();

        if (cargoKey && cargoDatabase[cargoKey]) {
            const finalURL = cargoDatabase[cargoKey] + trackingNumber;
            window.location.href = finalURL;
        } else {
            window.location.href = 'https://www.track-trace.com/';
        }
    };


  return (
    <div className='container min-vh-100 py-4'>
        <div className='card mx-auto' style={{maxWidth:'500px'}}>
            <div className='card-body px-4'>
            <form onSubmit={handleSubmit} className='mt-4'>
                <h2 className='h5 mb-4'>Track your consignment</h2>  

                <input 
                    type='text'
                    name='cargo'
                    placeholder='Cargo name (e.g DHL)'
                    value={formData.cargo}
                    onChange={handleChange}
                    className='form-control my-4'
                    required
                />  

                <input 
                    type='text'
                    name='number'
                    placeholder='Tracking number'
                    value={formData.number}
                    onChange={handleChange}
                    className='form-control my-4'
                    required
                /> 

                <button type='submit' className='d-block btn btn-success w-100 p-2 mb-4'>
                    Track
                </button> 
            </form>
        {error && <p className='text-danger mt-3'>{error}</p>}
        </div>
        </div>
    </div>
  )
}

export default Track