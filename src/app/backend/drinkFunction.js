import dayjs from 'dayjs';
import gnvDrink from '../backend/drinkData.js';

export default function drinkRestaurantDecision(filterWords) {
  let narrowedChoices = [];

  let finalChoices = [];

  function drinkFinder(filterWords) {
    distanceFilter(filterWords, gnvDrink);
  
    narrowedChoices.forEach((restaurant) => {
      if((filterWords[1] === restaurant.drinkTemp) || (filterWords[1] === "Any")) {
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
  
  function distanceFilter(filterWords, gnvDrink) {
    if(filterWords[2] === 1) {
      gnvDrink.forEach((restaurant) => {
        if(restaurant.distance <= 1.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else if(filterWords[2] === 2) {
      gnvDrink.forEach((restaurant) => {
        if(restaurant.distance <= 3.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else {
      gnvDrink.forEach((restaurant) => {
        finalChoices.push(restaurant);
      })
    }
  };

  return drinkFinder(filterWords);
};

