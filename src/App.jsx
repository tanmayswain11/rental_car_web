import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RentForm from "./Pages/RentForm";
import Success from "./Pages/Success";
import PartnerForm from "./Pages/PartnerForm";
import RentCar from "./pages/RentCar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rent" element={<RentForm />} />
      <Route path="/partner" element={<PartnerForm/>} />
      <Route path="/success" element={<Success />} />
      <Route path="/rent-cars" element={<RentCar />} />
    </Routes>
  );
}

export default App;