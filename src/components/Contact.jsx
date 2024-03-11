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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.2390541188556!2d100.55235967828295!3d13.741362246497188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee747d4c47b%3A0xcd4b1377d9138499!2sNana%20Plaza!5e0!3m2!1sen!2sin!4v1709574641340!5m2!1sen!2sin'
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
