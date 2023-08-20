import express from "express"
import "dotenv/config"
import sequelize from "./src/lib/sequelize.js";
import { login, register } from "./src/login_register/login.js";
import { Group, User } from "./src/model/index.js";
import { checkToken } from "./src/middleware/mid.js";
import groupsRouter from "./src/routes/gruop.router.js";
import userRouter from "./src/routes/users.router.js";
import { Post_Group } from "./src/controller/group.controller.js";
import order from "./src/routes/order.router.js";
import { GetUserInfo } from "./src/controller/users.controller.js";
import {post_Chennel } from "./src/controller/channel.controller.js";
// import userRouter from "./src/routes/users.router.js";


const app = express();
app.use(express.json()); 

app.post("/login",login)
app.post("/register",register)

app.post(checkToken)
// app.use(userRouter)

app.get("/users",GetUserInfo )
app.post("/groups",Post_Group) 
app.post("/channel", post_Chennel )
app.use(order)

app.use("/" ,(req ,res) =>{ 
    res.send("Bad request")
})



try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) { 
    console.error("Unable to connect to the database:", error);
  }


app.listen(process.env["PORT"],() =>{
    console.log(`Server is running on ${process.env["PORT"]} port`);
})