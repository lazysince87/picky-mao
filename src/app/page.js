'use client'

import {React, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from "next/image"
import './styles.css'


const images = [
  { src: '/foodpic.png', alt: 'Food Choice', width: 250, height: 250, link: '/food' },
  { src: '/boba.gif', alt: 'Drink Choice', width: 400, height: 300, link: '/drink' },
  { src: '/dessert1.png', alt: 'Dessert Choice', width: 320, height: 300, link: '/dessert' },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='home'>
      <h1 className='title'>PICKY MAO</h1>
      <Image
        className='logo'
        src='/capologo.gif'
        alt='Picky Mao Logo'
        width={100}
        height={60}
        style={{ objectFit: 'contain', width: 'auto' }}
      />
      <div className='imagesContainer'>
        {images.map((image, index) => {
          // Determine the class for each image based on its position relative to the active index
          let positionClass = '';
          if (index === activeIndex) {
            positionClass = 'active';
          } else if (index === (activeIndex + 1) % images.length) {
            positionClass = 'right';
          } else if (index === (activeIndex - 1 + images.length) % images.length) {
            positionClass = 'left';
          }

          return (
            <div key={index} className={`Choice ${positionClass}`}>
              <Link href={image.link}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </Link>
            </div>
          );
        })}
        <div className='navigate'>
          <button className='slideButton' onClick={handlePrev}>Previous</button>
          <button className='slideButton' onClick={handleNext}>Next</button>
      </div>
      </div>
    </div>
  );
}

