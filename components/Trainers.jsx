import React from 'react';
import TrainerCard from '../layouts/TrainerCard';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

const Trainers = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-5 md:px-32'>
      <h1 className='mt-10 text-4xl font-semibold text-center'>Our Trainers</h1>

      <div className='flex flex-col items-center justify-center gap-10 mt-8 md:flex-row'>
        <TrainerCard img={img1} name='maal katui' />
        <TrainerCard img={img2} name='Randi katua' />
        <TrainerCard img={img3} name='Maal katui' />
      </div>
    </div>
  );
};

export default Trainers;
