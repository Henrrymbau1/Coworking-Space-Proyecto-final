import "./App.css";
import { ContactUs } from "./Components/footer/Footer";
import Faq from "./Pages/faq/Faq";
import Navbar from "./Components/navbar/Navbar";
import SupportChat from "./Components/SupportChat/SupportChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { JwtContext } from "../src/shared/Context/JwtContext";
import { LoginPage } from "./Pages/login/LoginPage";
import { RegisterPage } from "./Pages/resgisterPage/RegisterPage";
import axios from "axios";
import { Locations } from "./Pages/Locations/Locations";
import { Fares } from "./Pages/Fares/Fares";
import { About } from "./Pages/About/About";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  const [coworking, setCoworking] = useState([]);
  const [fares, setFares] = useState([]);
  const url = "https://co-working-back.vercel.app";

  const coworkingUrl = url + "/coworking";
  const faresUrl = url + "/fares";

  const getCoworking = (coworkingUrl) => {
    axios.get(coworkingUrl).then((response) => {
      setCoworking(response.data.coworking);
    });
  };

  const getFares = (faresUrl) => {
    axios.get(faresUrl).then((response) => {
      setCoworking(response.data.fares);
    });
  };

  useEffect(() => {
    getCoworking(coworkingUrl);
    getFares(faresUrl);
  });

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/locations" element={<Locations/>} />
            <Route path="/fares" element={<Fares/>} />
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
