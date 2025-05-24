import React, { useState } from 'react'

const FormHandle = () => {
    const [submittedData, setSubmittedData] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        setSubmittedData({ name: name, email: email, phone: phone })
    }
    return (
        <div className='max-w-md mx-auto mt-10 p-6 border rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>User information Form</h2>
            <form onSubmit={handleSubmit} action=" space-y-y">
                <div>
                    <label className='block mb-1 font-medium'>Name:</label>
                    <input type="text" name='name' className='w-full border p-2 rounded-lg' />
                </div>
                <div>
                    <label className='block mb-1 font-medium'>Email:</label>
                    <input type="email" name='email' className='w-full border p-2 rounded-lg' />
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Phone number:</label>
                    <input type="number" name='phone' className='w-full border p-2 rounded-lg' />
                </div>



                <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded-lg mt-5'>Submit</button>
            </form>
            {
                submittedData && <div className='mt-6 p-4 bg-green-100 border rounded'>
                    <h3 className='font-semibold text-green-700'>Submitted info:</h3>
                    <p><strong>Name:</strong>{submittedData.name}</p>
                    <p><strong>Email:</strong>{submittedData.email}</p>
                    <p><strong>Phone:</strong>{submittedData.phone}</p>
                </div>
            }

        </div>
    )
}

export default FormHandle