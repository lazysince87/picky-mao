import React from 'react'
import Image from "next/image";

export default function Home() {
  return (
    <div className= ' home '>
      <div className='background' style={{ backgroundColor: 'rgb(224,224,224)'}}>
        <div className='imagesContainer'>
            <div className="foodChoiceDiv">
              <Image 
              className='foodChoice'
              src="/foodpic.png"
              alt="Food Choice Picture"
              width={280}
              height={300}
              />
          </div>

          <div className="drinkChoiceDiv">
              <Image 
              className='drinkChoice'
              src="/boba.gif"
              alt="Food Choice Picture"
              width={350}
              height={300}
              />
          </div>

          <div className="dessertChoiceDiv">
              <Image 
              className='dessertChoice'
              src="/dessert.png"
              alt="Food Choice Picture"
              width={400}
              height={300}
              />
          </div>
          </div>
        </div>
      </div>
  );
}
