import { Router } from "express";
import {
 
  createUser,
  
} from "../controllers/user.controller.js";

const router = Router();


router.get("/user", createUser);


export default router;
