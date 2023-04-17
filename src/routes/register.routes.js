import { Router } from "express";
import {
  register,createClient
} from "../controllers/register.controller.js";

const router = Router();

// GET all Employees
router.get("/", register);

router.post("/addregister", createClient);

router.get("/form", register);
export default router;