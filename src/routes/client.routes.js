import { Router } from "express";
import {
  createClient,
  deleteClient,
  getClient,
  getClients,
  updateClient,
} from "../controllers/client.controller.js";

const router = Router();

// GET all Employees
//router.get("/clients", getClients);

// // GET An Employee
// router.get("/employees/:id", getClient);

// // DELETE An Employee
// router.delete("/employees/:id", deleteClient);

// INSERT An client
router.post("/", createClient);

// router.patch("/employees/:id", updateClient);

export default router;
