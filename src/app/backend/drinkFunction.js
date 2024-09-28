import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export default function drinkRestaurantDecision(filterWords) {
  function drinkFinder(filterWords) {
    let narrowedChoices = [];
  
    distanceFilter(filterWords, gnvDrink);
  
    let finalChoices = [];
  
    narrowedChoices.forEach((restuarant) => {
      if((filterWords.drinkTemp === restuarant.drinkTemp) || (filterWords.drinkTemp === "Any")) {
        if((filterWords.nowOrLater === "now") && getTime(gnvDrink)) {
          finalChoices.push(restuarant);
        }
        else {
          finalChoices.push(restuarant);
        }
      }
    })

    if(finalChoices.length === 0) {
      return {};
    } else {
      return finalChoices[Math.floor(finalChoices.length * Math.random())];
    }
  };

  function getTime(foodList) {
    let hour = dayjs().hour();
    let hourString = hour.format('H');
    let hourFloat = parseFloat(hourString);
    
    if(hourFloat > foodList.openTime && hourFloat < foodList.closeTime) {
      return true;
    }
    return false
  };
  
  function distanceFilter(filterWords, foodList) {
    if(filterWords.distance === 1) {
      foodList.forEach((restuarant) => {
        if(restuarant.distance <= 1.0) {
          finalChoices.push(restuarant);
        }
      })
    } else if(filterWords.distance === 2) {
      foodList.forEach((restuarant) => {
        if(restuarant.distance <= 3.0) {
          finalChoices.push(restuarant);
        }
      })
    } else {
      foodList.forEach((restuarant) => {
        if(restuarant.distance > 3.0) {
          finalChoices.push(restuarant);
        }
      })
    }
  };
};

const gnvDrink = [
  {
    name: "Tiger Sugar",
    distance: 2.9,
    openTime: 10.5,
    closeTime: 17.0,
    drinkTemp: "cold"
  }, {
    name: "TeaStori",
    distance: 3.6,
    openTime: 12.0,
    closeTime: 22.0,
    drinkTemp: "cold"
  }, {
    name: "Tea Moment",
    distance: 0.5,
    openTime: 11.0,
    closeTime: 21.0,
    drinkTemp: "cold"
  }, {
    name: "Coffee Culture",
    distance: 2.0,
    openTime: 6.0,
    closeTime: 19.0,
    drinkTemp: "hot"
  }, {
    name: "Karma Cream",
    distance: 1.2,
    openTime: 8.0,
    closeTime: 19.0,
    drinkTemp: "hot"
  }, {
    name: "Concord Coffee",
    distance: 0.6,
    openTime: 8.0,
    closeTime: 17.0,
    drinkTemp: "hot"
  }, {
    name: "MacDinton's GNV",
    distance: 0.5,
    openTime: 10.0,
    closeTime: 26.0,
    drinkTemp: "cold"
  }, {
    name: "Loosey's Downtown Gainesville",
    distance: 1.7,
    openTime: 11.0,
    closeTime: 23.0,
    drinkTemp: "cold"
  }, {
    name: "Clean Juice",
    distance: 3.3,
    openTime: 7.0,
    closeTime: 20.0,
    drinkTemp: "cold"
  }
]