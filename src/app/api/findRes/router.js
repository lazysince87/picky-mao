import { gnvFood, gnvDrink, gnvDessert } from './backend/restaurant_Data.js'; // Adjust the path if needed

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { drinkTemp, nowOrLater } = req.body;

    // You can create a function to find the best drink option
    const bestDrink = drinkFinder({ drinkTemp, nowOrLater });

    res.status(200).json(bestDrink);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function drinkFinder(filterWords) {
  // Filtering logic as per your requirements
  const finalChoices = gnvDrink.filter(drink => 
    drink.drinkTemp === filterWords.drinkTemp &&
    ((filterWords.nowOrLater === "now" && getTime(drink)) || 
     (filterWords.nowOrLater !== "now"))
  );

  return finalChoices;
}

function getTime(drink) {
  let hour = dayjs().hour();
  return hour >= drink.openTime && hour < drink.closeTime;
}
