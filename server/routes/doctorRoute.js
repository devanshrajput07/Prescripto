import express from "express";
import {
  doctorList,
  loginDoctor,
  getDoctorAppointments,
  appointmentComplete,
  cancelAppointment,
  doctorDashboard,
} from "../controllers/doctorContoller.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, getDoctorAppointments);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, cancelAppointment);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

export default doctorRouter;
