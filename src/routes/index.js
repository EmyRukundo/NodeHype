import { Router } from "express";
import indexController from "../controllers";

const router = Router();




export default (app)=>{
  
app.get("/api/v1/", (req, res)=>
  res.send("<h1>Hello world</h1>"))
}