

import { pool } from "../db.js";

export const getQuestions = async (req, res) => {
  try {
    res.render('registerview');
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getQuestion = async (req, res) => {
    try {
    
    } catch (error) {
     
    }
};

export const deleteQuestion = async (req, res) => {
  try {
   
  } catch (error) {
   
  }
};

export const createQuestion = async (req, res) => {
  try {
    
  } catch (error) {
   
  }
};

export const updateQuestion = async (req, res) => {
  try {
   
  } catch (error) {
    
  }
};
