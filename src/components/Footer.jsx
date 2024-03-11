import { AiOutlineMail } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { Link } from 'react-scroll';
import React from 'react';

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='bg-[#222] mt-5 rounded-t-3xl py-8'>
      <div className='flex flex-col justify-between px-5 md:flex-row md:px-32'>
        <div className='w-full md:w-1/4'>
          <Link to='/'>
            <h1 className='text-2xl font-semibold text-brightRed'>
              Carepoint Gyms
            </h1>
          </Link>
          <p className='mt-4'>
            The best fitness destination in Lahore, for men and women.
          </p>
        </div>
        <div className='mt-8 md:mt-0 md:ml-8'>
          <h1 className='text-xl font-medium text-brightRed'>Address</h1>
          <p className='mt-4'>
            Hosur Rd, Kudlu Gate, Srinivasa Nagar, Hal Layout, Singasandra,
            Bengaluru, Karnataka 560068
          </p>
        </div>

        <div className='mt-8 md:mt-0 md:ml-8'>
          <h1 className='text-xl font-medium text-brightRed'>Business Hours</h1>
          <ul className='mt-4'>
            <li>Mon-Sun: 6:00 AM – 10:00 PM</li>
          </ul>
        </div>
        <div className='mt-8 md:mt-0 md:ml-8'>
          <h1 className='text-xl font-medium text-brightRed '>Contact</h1>
          <div className='flex flex-row items-center mt-4'>
            <AiTwotonePhone size={20} />
            <p className='ml-2'>9100000000</p>
          </div>
          <div className='flex flex-row items-center mt-2'>
            <AiOutlineMail size={20} color='red' />
            <p className='ml-2'>carepointgym@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-center'>
          © <span className='text-brightRed'>Carepoint gym</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;
