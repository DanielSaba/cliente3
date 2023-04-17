import { Router } from "express";
 import {

   getQuestions
 } from "../controllers/question.controller.js";

const router = Router();

// GET all Employees
router.get("/", getQuestions);

// // GET An Employee
// router.get("/employees/:id", getQuestion);

// // DELETE An Employee
// router.delete("/employees/:id", deleteQuestion);

// // INSERT An Employee
// router.post("/employees", createQuestion);

// router.patch("/employees/:id", updateQuestion);

export default router;