import "./App.css";
import { ContactUs } from "./Components/footer/Footer";
import Faq from "./Pages/faq/Faq";
import Navbar from "./Components/navbar/Navbar";
import SupportChat from "./Components/SupportChat/SupportChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { JwtContext } from "../src/shared/Context/JwtContext";
import { LoginPage } from "./Pages/login/LoginPage";
import { RegisterPage } from "./Pages/resgisterPage/RegisterPage";
import { Locations } from "./Pages/Locations/Locations";
import { Fares } from "./Pages/Fares/Fares";
import { About } from "./Pages/About/About";
import LocationsDetails from "./Pages/Locations/LocationsDetails/LocationsDetails";
import Home from "./Pages/Home/Home";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationsDetails />} />
            <Route path="/fares" element={<Fares />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <SupportChat />
          <ContactUs />
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
