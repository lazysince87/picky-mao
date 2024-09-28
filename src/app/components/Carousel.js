'use client'

import React, { Fragment, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './Carousel.css';

const Collection = ({ type, photos = [] }) => { // Default to empty array if undefined
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const galleryWidth = galleryRef.current.offsetWidth;
      const index = Math.round(scrollLeft / galleryWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const currentGallery = galleryRef.current;

    if (currentGallery) {
      currentGallery.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentGallery) {
        currentGallery.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="gallery" ref={galleryRef}>
        {photos.map((photo, index) => (
          <div key={photo} className="photo-wrapper">
            <Image
              src={photo}
              alt={photo}
              quality={100}
              width={300} // Adjust size as needed
              height={200} // Adjust size as needed
              unoptimized
              className={`photo ${index === currentIndex ? 'active' : ''}`}
            />
            <span className="type">{type}</span>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="dots-container">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Collection;
