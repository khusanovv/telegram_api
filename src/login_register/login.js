import  jwt from "jsonwebtoken";
import { User } from "../model/users.medel.js";

export async function register(req,res) {
    try {
        let check_data = await User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        });
        if (check_data.length > 0) {
            res.status(500).json({ 
                message: "This username already exists, please choose another username"
             })
        }
        else {
            await User.create({
                username: req.body.username,
                first_name: req.body.first_name,
                second_name: req.body.second_name,
                password: req.body.password,
                description:req.body.description
            }).then((result) => {
                let token = jwt.sign({username:req.body.username},process.env["secretKey"])
                res.status(201).json({
                    message: "User successful created",token,
                    data: {
                        username: req.body.username
                        , first_name: req.body.first_name,
                        second_name: req.body.second_name,
                        password: req.body.password,
                        description:req.body.description
                    }
                }
                )
            })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export async function login(req,res) {
    try {
        await User.findOne({where:{username:req.body.username}}).then(async (result) =>{
            if (!result) {
                return res.status(500).json({status:500,message:"invalid username "})
            }
            if (result.password == req.body.password) {

                let token = jwt.sign({username:result.username},process.env["secretKey"])
                return res.status(200).json({
                    status:200,
                    message:"Welcome back",
                    token})
            }
            else{
                return res.status(400).json({message:"password is incorrect"})
            }
       })

    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error.message
        })
    }    
}

