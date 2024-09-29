import dayjs from 'dayjs';

export default function dessertRestaurantDecision(filterWords) {
  function dessertFinder(filterWords) {
    let narrowedChoices = [];
  
    distanceFilter(filterWords, gnvDessert);
  
    let finalChoices = [];
  
    narrowedChoices.forEach((restuarant) => {
      if((filterWords.dessertType === restuarant.dessertType) || (filterWords.dessertType === "Any")) {
        if((filterWords.nowOrLater === "now") && getTime(gnvDessert)) {
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
  }
  
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