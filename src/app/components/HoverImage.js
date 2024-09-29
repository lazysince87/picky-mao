'use client';
import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const HoverImage = ({ src, hoverSrc, alt, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="imageWrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Image
          src={hoverSrc}
          alt={alt}
          width={width}
          height={height}
          className="hoverImage"
        />
      ) : (
        <Image 
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="homepageImage"
        />
      )}
    </div>
  );
};

HoverImage.propTypes = {
  src: PropTypes.string.isRequired,
  hoverSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default HoverImage;
