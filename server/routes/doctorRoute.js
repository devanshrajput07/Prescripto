import express from "express";
import { doctorList } from "../controllers/doctorContoller.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);

export default doctorRouter;
