import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function foodFinder(filterWords) {
  let narrowedChoices = [];

  distanceFilter(filterWords, gnvFood);

  let finalChoices = [];

  narrowedChoices.forEach((restuarant) => {
    if((filterWords.types === restuarant.types) &&
       (filterWords.cuisine === restuarant.cuisine) && 
       (restuarant.price <= filterWords.price)) {
        if((filterWords.nowOrLater === "now") && getTime(gnvFood)) {
          finalChoices.push(restuarant);
        }
        else {
          finalChoices.push(restuarant);
        }
    }
  })
}

function drinkFinder(filterWords) {
  let narrowedChoices = [];

  distanceFilter(filterWords, gnvDrink);

  let finalChoices = [];

  narrowedChoices.forEach((restuarant) => {
    if((filterWords.drinkTemp === restuarant.drinkTemp)) {
      if((filterWords.nowOrLater === "now") && getTime(gnvDrink)) {
        finalChoices.push(restuarant);
      }
      else {
        finalChoices.push(restuarant);
      }
    }
  })
};

function dessertFinder(filterWords) {
  let narrowedChoices = [];

  distanceFilter(filterWords, gnvDessert);

  let finalChoices = [];

  narrowedChoices.forEach((restuarant) => {
    if((filterWords.dessertType === restuarant.dessertType)) {
      if((filterWords.nowOrLater === "now") && getTime(gnvDessert)) {
        finalChoices.push(restuarant);
      }
      else {
        finalChoices.push(restuarant);
      }
    }
  })
};



function getTime(foodList) {
  let hour = dayjs().hour();
  let hourString = hour.format('H');
  let hourFloat = parseFloat(hourString);
  
  if(hourFloat > foodList.openTime && hourFloat < foodList.closeTime) {
    return true;
  }
  return false
}

function distanceFilter(filterWords, foodList) {
  if(filterWords.distance === 1) {
    foodList.forEach((restuarant) => {
      if(restuarant.distance <= 3.0) {
        finalChoices.push(restuarant);
      }
    })
  } else if(filterWords.distance === 2) {
    foodList.forEach((restuarant) => {
      if(restuarant.distance <= 5.0) {
        finalChoices.push(restuarant);
      }
    })
  } else {
    foodList.forEach((restuarant) => {
      if(restuarant.distance > 5.0) {
        finalChoices.push(restuarant);
      }
    })
  }
};

const gnvFood = [
  {
      name: "Germaines",
      distance: 1.9,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "american",
      price: 1
  }, {
      name: "Pokebowl Station",
      distance: 0.4,
      openTime: 10.5,
      closeTime: 21.0,
      types: "fast food",
      cuisine: "asian",
      price: 1
  }, {
      name: "McDonald's",
      distance: 0.7,
      openTime: 0.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
      price: 1
  }, {
      name: "Tup Tim Thai",
      distance: 0.7,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "asian",
      price: 1
  }, {
      name: "Raising Cane's",
      distance: 0.4,
      openTime: 10.0,
      closeTime: 26.0,
      types: "fast food",
      cuisine: "american",
      price: 1
  }, {
      name: "Momoyaki",
      distance: 1.1,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "asian",
      price: 1
  }, {
      name: "El Indio",
      distance: 0.9,
      openTime: 11.0,
      closeTime: 21.0,
      types: "gourmet",
      cuisine: "hispanic",
      price: 1
  }, {
      name: "Subway",
      distance: 0.9,
      openTime: 9.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
      price: 1
  }, {
      name: "M&D West African Cuisine",
      distance: 0.9,
      openTime: 9.0,
      closeTime: 24.0,
      types: "fast food",
      cuisine: "american",
      price: 1
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

const gnvDessert = [
  {
    name: "Dolce Vita Bakery Cafe",
    distance: 5.4,
    openTime: 7.5,
    closeTime: 17.0,
    dessertType: "pastery"
  }, {
    name: "Gigi's Cupcakes Gainesville",
    distance: 3.2,
    openTime: 10.0,
    closeTime: 20.0,
    dessertType: "pastery"
  }, {
    name: "Insomnia Cookies",
    distance: 0.6,
    openTime: 11.0,
    closeTime: 25.0,
    dessertType: "pastery"
  }, {
    name: "Zero Degrees",
    distance: 2.8,
    openTime: 12.0,
    closeTime: 22.0,
    dessertType: "iced"
  }, {
    name: "The Hyppo Gainesville",
    distance: 2.0,
    openTime: 12.0,
    closeTime: 22.0,
    dessertType: "iced"
  }, {
    name: "Jeremiah's Italian Ice",
    distance: 3.3,
    openTime: 12.0,
    closeTime: 22.0,
    dessertType: "iced"
  }, {
    name: "SweetBerries Eatery and Frozen Custurd",
    distance: 3.3,
    openTime: 8.0,
    closeTime: 16.5,
    dessertType: "iced"
  }, {
    name: "Frosty Fox",
    distance: 3.0,
    openTime: 12.0,
    closeTime: 22.0,
    dessertType: "iced"
  }, {
    name: "Just Celebrate LLC",
    distance: 4.4,
    openTime: 11.0,
    closeTime: 18.0,
    dessertType: "pastry"
  }
]