import Button from '../layouts/Button';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-5 mt-10 md:mx-32'>
      <div className='flex flex-col justify-between w-full md:flex-row'>
        <form className='w-full pt-20 space-y-5 md:w-2/5'>
          <h1 className='text-5xl font-semibold text-center'>Contact Us</h1>
          <div className='flex flex-col'>
            <label htmlFor='userName'>Your Name</label>
            <input
              className='px-5 py-3 text-gray-800 transition-all bg-gray-100 rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brightRed'
              type='text'
              name='userName'
              id='userName'
              placeholder='Enter your Name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='userEmail'>Your Email</label>
            <input
              className='px-5 py-3 text-gray-800 transition-all bg-gray-100 rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brightRed'
              type='email'
              name='userEmail'
              id='userEmail'
              placeholder='Enter your Email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='userNumber'>Your Number</label>
            <input
              className='px-5 py-3 text-gray-800 transition-all bg-gray-100 rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brightRed'
              type='number'
              name='userNumber'
              id='userNumber'
              placeholder='Enter your Number'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='userMessage'>Your Message</label>
            <textarea
              className='px-5 py-3 text-gray-800 transition-all bg-gray-100 rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brightRed'
              name='userMessage'
              id='userMessage'
              rows='4'
              placeholder='Enter your Message'
            ></textarea>
          </div>
          <div className='flex flex-row justify-center space-x-4'>
            <Button title='Send Message' />
            <Button title='Start a call' href='tel:+92' />
          </div>
        </form>
        <div className='flex flex-row items-center w-full my-5 md:w-2/4'>
          <iframe
            title='Location'
            src='https://www.google.com/maps/place/Dayananda+Sagar+University+(DSU)+-+City+Campus/@12.8903811,77.6421572,15z/data=!4m6!3m5!1s0x3bae14b023dade9d:0x35272e55303bd711!8m2!3d12.8874283!4d77.6419887!16s%2Fg%2F11f3s9wb0k?entry=ttu'
            width='500'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
