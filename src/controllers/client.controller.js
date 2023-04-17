import { pool } from "../db.js";
import Swal from 'sweetalert2'

export const getClient = async (req, res) => {
  try {
    
  } catch (error) {
   
  }
};

export const getClients = async (req, res) => {
    try {
    
    } catch (error) {
     
    }
};

export const deleteClient = async (req, res) => {
  try {
   
  } catch (error) {
   
  }
};

export const createClient = async (req, res) => {
  //try{
    const{name,university,carrera,institution,phone,uno}=req.body;
   await pool.query("INSERT INTO usuario(name,university,carrera,institution,phone,uno) VALUES (?,?,?,?,?,?)",[name,university,carrera,institution,phone,uno]
    );

    Swal.fire('Hello world!');
    //res.status(201).json({ id: rows.name });
    console.log("paso por add");
    
    res.redirect("/");
   // res.status(201).json({ id:rows.name, phone });
    //res.redirect('/');
  // res.redirect('/');
 // }catch (error) {
  //  return res.status(500).json({ message: "Something goes wrong" });
//}
};

export const updateClient = async (req, res) => {
  try {
   
  } catch (error) {
    
  }
};
