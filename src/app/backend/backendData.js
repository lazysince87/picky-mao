import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// for crystal to retrive backend data --no side effects
app.get("/", (req, res) => {
  res.status(200).json({name: "Zero Degrees", distance: 2.3, openTime: 10.0, closeTime: 22.0});
});

// for maggie to update backend data with user inputs --h side effects
app.put("/add", (req, res) => {
  gnvDessert.push({
    id: gnvDessert[gnvDessert.length - 1].id + 1,
    name: req.body.name,
    age: req.body.age,
    country: req.body.country,
  });
  try {
    res.status(200).json(gnvDessert);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

let port = 8000;

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});

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