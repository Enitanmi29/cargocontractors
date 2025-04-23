import React, { useState } from 'react'

const Track = () => {
    const [formData, setFormData] = useState({
            cargo:'',
            number:'',

    });

    const [error, setError] = useState('');
    
    const cargoDatabase = [
        {
          cargo: 'DHL',
          number: '12345',
          url: 'https://www.dhl.com/global-en/home/tracking.html',
        },
        {
          cargo: 'FedEx',
          number: '54321',
          url: 'https://www.fedex.com/en-us/tracking.html',
        },
        {
          cargo: 'UPS',
          number: '67890',
          url: 'https://www.ups.com/track',
        },
      ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const redirect = cargoDatabase.find(
            (entry) =>
              entry.cargo.toLowerCase() === formData.cargo.toLowerCase() &&
              entry.number === formData.number
        );

        if (redirect) {
            window.location.href = redirect.url;
        } else {
            setError('No match found. Please check your cargo name and tracking number.')
        }
    };


  return (
    <div className='container bg-light min-vh-100 py-4'>
        <div className='card mx-auto' style={{maxWidth:'500px'}}>
            <div className='card-b0dy'>
            <form onSubmit={handleSubmit} className='mt-4'>
                <h2 className='h5 mb-4'>Track your consignment</h2>  

                <input 
                    type='text'
                    name='cargo'
                    placeholder='enter cargo name'
                    value={formData.cargo}
                    onChange={handleChange}
                    className='form-control'
                    required
                />  

                <input 
                    type='text'
                    name='number'
                    placeholder='enter the tracking number'
                    value={formData.number}
                    onChange={handleChange}
                    className='form-control'
                    required
                /> 

                <button type='submit' className='d-block btn btn-success w-full p-2 mb-4'>
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