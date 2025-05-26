import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [submittedData, setSubmittedData] = useState(null)
    const onSubmit = (data) => {
        setSubmittedData(data)
    }
    return (
        <div className='max-w-md mx-auto mt-10 p-6 border rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>User information using react hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div>
                    <label className='block mb-1 font-medium'>Name:</label>
                    <input type="text" {...register('name', { required: "name is required" })} className='w-full border p-2 rounded-lg' />
                </div>
                <div>
                    <label className='block mb-1 font-medium'>Email:</label>
                    <input type="email" {...register('email', { required: "email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email address" } })} className='w-full border p-2 rounded-lg' />
                    {errors.email && (
                        <p className='text-red-500'>{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Phone number:</label>
                    <input type="number" {...register('phone', { required: "phone number is required", pattern: { value: /^01[3-9]\d{8}/, message: 'Enter a valid phone number' } })} className='w-full border p-2 rounded-lg' />
                    {errors.phone && (
                        <p className='text-red-500'>{errors.phone.message}</p>
                    )}
                </div>



                <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded-lg mt-5'>Submit</button>
                {
                    submittedData && <div className='mt-6 p-4 bg-green-100 border rounded'>
                        <h3 className='font-semibold text-green-700'>Submitted info:</h3>
                        <p><strong>Name:</strong>{submittedData.name}</p>
                        <p><strong>Email:</strong>{submittedData.email}</p>
                        <p><strong>Phone:</strong>{submittedData.phone}</p>
                    </div>
                }
            </form>
        </div>
    )
}

export default HookForm