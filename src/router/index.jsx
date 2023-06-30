import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Students } from "../pages/Students";
import { Groups } from "../pages/Group";
import { Payment } from "../pages/Payment";
import { Attendance } from "../pages/Attendance";
import { Apeal } from "../pages/Appeal/inde";

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/group" element={<Groups />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/davomat" element={<Attendance />} />
      <Route path="/apeal" element={<Apeal/>}/>
    </Routes>
  );
};
