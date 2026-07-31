import celerio from "../assets/images/cars/celerio.jpeg"
import fronx from "../assets/images/cars/fronx.jpeg"
import grandvitara from "../assets/images/cars/grand_vitara.jpeg"
import hyundai_i20 from "../assets/images/cars/hyundai_i20.jpeg"
import i10 from "../assets/images/cars/i10.jpeg"
import scorpio from "../assets/images/cars/scorpio.jpeg"
import swift from "../assets/images/cars/swift.jpeg"
import venue from "../assets/images/cars/venue.jpeg"

const cars = [
  {
    id: 1,
    name: "GRAND VITARA",
    image: grandvitara,
    minprice:3300,
    maxprice:4000,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: "19.38 km/l - 27.97 km/l",
    ac: true,
  },

  {
    id: 2,
    name: "CELERIO",
    image: celerio,
    minprice:999,
    maxprice:1300,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: "24.97 km/l-26.68 km/l",
    ac: true,
  },

  {
    id: 3,
    name: "FRONX",
    image: fronx,
    minprice:2200,
    maxprice:2600,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: "20.01 km/l - 22.89 km/l",
    ac: true,
  },

  {
    id: 4,
    name: "HYUNDAI I20",
    image: hyundai_i20,
    minprice:1700,
    maxprice:2400,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    mileage: "16 km/l-20 km/l",
    ac: true,
  },

  {
    id: 5,
    name: "HYUNDAI I10(GRAND I10/NIOS)",
    image: i10,
    minprice:1400,
    maxprice:1800,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: "17 km/l - 20 km/l",
    ac: true,
  },

  {
    id: 6,
    name: "MAHINDRA SCORPIO",
    image: scorpio,
    minprice:4000,
    maxprice:5000,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 7,
    mileage: "12 km/l",
    ac: true,
  },

    {
    id: 7,
    name: "SWIFT",
    image: swift,
    minprice:1600,
    maxprice:2000,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    mileage: "28.4 km/l",
    ac: true,
  },

    {
    id: 8,
    name: "VENUE",
    image: venue,
    minprice:2500,
    maxprice:3200,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: "18 km/l - 20 km/l",
    ac: true,
  },
];

export default cars;