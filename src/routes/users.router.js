import { Router } from "express";
import { GetUserInfo } from "../controller/users.controller.js";

const userRouter = Router();

userRouter.get("/users",GetUserInfo)

export default userRouter 