import { Router } from "express";
import { Post_Group } from "../controller/group.controller.js";

const groupsRouter = Router();

groupsRouter.post("/",Post_Group)
// .get("/messages/",Get_All_Group_Message)
// .get("/users/:id",Get_All_Group_Users)
// .get("/:id",Groups_subscription)
// .post("/:id",Groups_Send_Message)

export default groupsRouter