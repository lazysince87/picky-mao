import dayjs from 'dayjs'
import gnvFood from '../backend/foodData.js';

export default function foodRestaurantDecision(filterWords) {
  let narrowedChoices = [];

  let finalChoices = [];

  function foodFinder(filterWords) {
    distanceFilter(filterWords, gnvFood);
    
    narrowedChoices.forEach((restaurant) => {
      if(((filterWords[1] === restaurant.types) || (filterWords[1] === "Any")) &&
         ((filterWords[2] === restaurant.cuisine) || (filterWords[2] === "Any"))) {
          if((filterWords[0] === "now") && getTime(restaurant)) {
            finalChoices.push(restaurant);
          }
          else {
            finalChoices.push(restaurant);
          }
      }
    })

    if(finalChoices.length === 0) {
      return {};
    } else {
    return finalChoices[Math.floor(finalChoices.length * Math.random())];
    }
  };

  function getTime(restaurant) {
    let hour = dayjs().hour();
    let hourString = hour.format('H');
    let hourFloat = parseFloat(hourString);
    
    if(hourFloat >= restaurant.openTime && hourFloat < restaurant.closeTime) {
      return true;
    }
    return false
  };
  
  function distanceFilter(filterWords, gnvFood) {
    if(filterWords[3] === 1) {
      gnvFood.forEach((restaurant) => {
        if(restaurant.distance <= 1.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else if(filterWords[3] === 2) {
      gnvFood.forEach((restaurant) => {
        if(restaurant.distance <= 3.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else {
      gnvFood.forEach((restaurant) => {
        narrowedChoices.push(restaurant);
      })
    }
  };

  return foodFinder(filterWords);
};

