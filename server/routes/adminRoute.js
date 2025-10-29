import express from "express";
import {
  addDoctor,
  loginAdmin,
  getAllDoctors,
  appointmentsAdmin,
  cancelAppointmentAdmin,
  adminDashboard
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorContoller.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, getAllDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin, cancelAppointmentAdmin);
adminRouter.get("/dashboard", authAdmin, adminDashboard);

export default adminRouter;
