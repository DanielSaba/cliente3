import { pool } from "../db.js";

export const register= async (req, res) => {
    try {
      res.render('registerview');
      console.log('holi');
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };


  export const createClient=async(req,res)=>{
   //try{
        const{name,phone,email,university,career,cycle}=req.body;
        const [rows]=await pool.query("INSERT INTO usuario(name,phone,email,university,career,cycle) VALUES (?,?,?,?,?,?)",[name,phone,email,university,career,cycle]
        );
     
        console.log("paso por add");
       // res.status(201).json({ id:rows.name, phone });
        //res.redirect('/');
 //// }catch (error) {
      //  return res.status(500).json({ message: "Something goes wrong" });
    //}

};

 export const form=async(req,res)=>{
  try{
      res.render('/form');
   
 }catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
  }

};