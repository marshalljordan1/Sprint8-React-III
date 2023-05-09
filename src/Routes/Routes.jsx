import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Starships from "../pages/Starships";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Starships/" element={<Starships />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
