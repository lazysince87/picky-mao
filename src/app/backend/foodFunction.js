import dayjs from 'dayjs'

export default function foodRestaurantDecision(filterWords) {
  function foodFinder(filterWords) {
  
    distanceFilter(filterWords, gnvFood);
    
    narrowedChoices.forEach((restuarant) => {
      if(((filterWords.types === restuarant.types) || (filterWords.types === "Any")) &&
         ((filterWords.cuisine === restuarant.cuisine) || (filterWords.cuisine === "Any"))) {
          if((filterWords.nowOrLater === "now") && getTime(restaurant)) {
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
      // return finalChoices[Math.floor(finalChoices.length * Math.random())];
      return {name: "hi", distance: 3.2, openTime: 10.0, closeTime: 19.0, cuisine: "asian"};
    }
  };

  function getTime(restaurant) {
    let hour = dayjs().hour();
    let hourString = hour.format('H');
    let hourFloat = parseFloat(hourString);
    
    if(hourFloat > restaurant.openTime && hourFloat < restaurant.closeTime) {
      return true;
    }
    return false
  };
  
  let narrowedChoices = [];

  let finalChoices = [];

  function distanceFilter(filterWords, foodList) {
    if(filterWords.distance === 1) {
      foodList.forEach((restuarant) => {
        if(restuarant.distance <= 1.0) {
          narrowedChoices.push(restuarant);
        }
      })
    } else if(filterWords.distance === 2) {
      foodList.forEach((restuarant) => {
        if(restuarant.distance <= 3.0) {
          narrowedChoices.push(restuarant);
        }
      })
    } else {
      foodList.forEach((restuarant) => {
        if(restuarant.distance > 3.0) {
          narrowedChoices.push(restuarant);
        }
      })
    }
  };
};

const gnvFood = [
  {
      name: "Germaines",
      distance: 1.9,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "american",
  }, {
      name: "Pokebowl Station",
      distance: 0.4,
      openTime: 10.5,
      closeTime: 21.0,
      types: "fast food",
      cuisine: "asian",
  }, {
      name: "McDonald's",
      distance: 0.7,
      openTime: 0.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
  }, {
      name: "Tup Tim Thai",
      distance: 0.7,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "asian",
  }, {
      name: "Raising Cane's",
      distance: 0.4,
      openTime: 10.0,
      closeTime: 26.0,
      types: "fast food",
      cuisine: "american",
  }, {
      name: "Momoyaki",
      distance: 1.1,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "asian",
  }, {
      name: "El Indio",
      distance: 0.9,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "hispanic",
  }, {
      name: "Subway",
      distance: 0.9,
      openTime: 9.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
  }, {
      name: "M&D West African Cuisine",
      distance: 0.9,
      openTime: 9.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
  }, {
    name: "Satchel's Pizza",
    distance: 4.4,
    openTime: 11.0,
    closeTime: 22.0,
    types: "gourmet",
    cuisine: "european",
    price: 1
  }, {
    name: "Olive Garden",
    distance: 3.9,
    openTime: 11.0,
    closeTime: 23.0,
    types: "gourmet",
    cuisine: "european",
    price: 1
  }, {
    name: "Cheesecake Factory",
    distance: 2.9,
    openTime: 11.0,
    closeTime: 21.0,
    types: "gourmet",
    cuisine: "european",
    price: 2
  }, {
    name: "Culver's",
    distance: 4.0,
    openTime: 10.0,
    closeTime: 24.0,
    types: "fast food",
    cuisine: "american",
    price: 1
  }, {
    name: "Red Rice",
    distance: 3.1,
    openTime: 11.5,
    closeTime: 21.0,
    types: "gourmet",
    cuisine: "asian",
    price: 1
  }, {
    name: "Waffle House",
    distance: 3.7,
    openTime: 0.0,
    closeTime: 24.0,
    types: "fast food",
    cuisine: "american",
    price: 1
  }, {
    name: "Ocean Buffet",
    distance: 4.7,
    openTime: 11.0,
    closeTime: 22.5,
    types: "buffet",
    cuisine: "asian",
    price: 1
  }, {
    name: "Gator Corner",
    distance: 0.4,
    openTime: 7.0,
    closeTime: 21.0,
    types: "buffet",
    cuisine: "american",
    price: 1
  }, {
    name: "Mi Apa",
    distance: 0.5,
    openTime: 7.0,
    closeTime: 17.0,
    types: "gourmet",
    cuisine: "hispanic",
    price: 1
  }, {
    name: "Bolay",
    distance: 0.5,
    openTime: 11.0,
    closeTime: 21.0,
    types: "fast food",
    cuisine: "american",
    price: 1
  }
]