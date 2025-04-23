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
    <div className='bg-gray-100 min-h-screen p-6'>
        <div className='max-w-md bg-white p-6 rounded-lg shadow-md'>
            <form onSubmit={handleSubmit} >
                <h2 className='text-xl font-semibold mb-4'>Track your consignment</h2>  

                <input 
                    type='text'
                    name='cargo'
                    placeholder='enter cargo name'
                    value={formData.cargo}
                    onChange={handleChange}
                    className='d-block w-full p-2 mb-3 border rounded'
                    required
                />  

                <input 
                    type='text'
                    name='number'
                    placeholder='enter the tracking number'
                    value={formData.number}
                    onChange={handleChange}
                    className='d-block w-full p-2 mb-3 border rounded'
                    required
                /> 

                <button type='submit' className='d-block btn btn-success'>
                    Track
                </button> 
            </form>
        {error && <p className='text-red-600 mt-3'>{error}</p>}
        </div>
    </div>
  )
}

export default Track