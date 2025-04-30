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
      maersk: 'https://www.maersk.com/tracking/?trackingNumber='
    }
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const cargoKey = formData.cargo.trim().toLowerCase();
        const trackingNumber = formData.number.trim();


        if (cargoDatabase[cargoKey]) {
            const finalURL = cargoDatabase[cargoKey] + trackingNumber;
            window.location.href = finalURL;
        } else {
            setError('No match found. Please check your cargo name and tracking number.')
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