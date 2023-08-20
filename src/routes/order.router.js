import { Router } from "express";
import { addCreate } from "../controller/order.controller.js";

const order = Router()

order.post("/order", addCreate)
export default order