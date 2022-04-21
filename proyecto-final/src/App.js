import "./App.css";
import Footer from "./Components/footer/Footer";
import Faq from "./Components/faq/Faq";
import Navbar from "./Components/navbar/Navbar";
import SupportChat from "./Components/SupportChat/SupportChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { JwtContext } from "../src/shared/Context/JwtContext";
import { LoginPage } from "./Pages/login/LoginPage";
import { RegisterPage } from "./Pages/resgisterPage/RegisterPage";
import axios from "axios";

function App() {
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
    <JwtContext.Provider>
      <div className="App">
        <Router>
          <Navbar></Navbar>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          <Footer></Footer>
          <SupportChat />
          <Faq></Faq>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
