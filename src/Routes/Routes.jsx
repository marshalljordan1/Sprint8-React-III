import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Starships from "../pages/Starships";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Starships/" element={<Starships />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
