import dayjs from 'dayjs';
import gnvDessert from '../backend/dessertData.js';

export default function dessertRestaurantDecision(filterWords) {
  let narrowedChoices = [];

  let finalChoices = [];

  function dessertFinder(filterWords) {
    distanceFilter(filterWords, gnvDessert);
  
    narrowedChoices.forEach((restaurant) => {
      if((filterWords[1] === restaurant.dessertType) || (filterWords.dessertType === "Any")) {
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
  }
  
  function distanceFilter(filterWords, gnvDessert) {
    if(filterWords[2] === 1) {
      gnvDessert.forEach((restaurant) => {
        if(restaurant.distance <= 1.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else if(filterWords[2] === 2) {
      gnvDessert.forEach((restaurant) => {
        if(restaurant.distance <= 3.0) {
          narrowedChoices.push(restaurant);
        }
      })
    } else {
      gnvDessert.forEach((restaurant) => {
        finalChoices.push(restaurant);
      })
    }
  };

  return dessertFinder(filterWords);
};