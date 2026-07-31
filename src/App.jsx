import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RentForm from "./Pages/RentForm";
import Success from "./Pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rent" element={<RentForm />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;