import  Jwt  from "jsonwebtoken";
import { User } from "../model/users.medel.js";
import { Group } from "../model/gruops.model.js";

export async function GetUserInfo(req,res) {
    try {
       const {token} = req.headers;
       const {username} = Jwt.verify(token,process.env["secretKey"])
       await User.findOne({where:{username},
        include:Group})
        .then(async (result) =>{
            if(!result){
                throw new Error("not found user")
            }
            return res.status(200).json({
                message:"user info",
                data:result
            })
        })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }   
}
export async function Get_Users_ID (req,res) {
    try {
        await User.findOne({where:{id},
            include:Group})
            .then(async (result) =>{
                if(!result){
                    throw new Error("not found user")
                }
                return res.status(200).json({
                    message:"user info",
                    data:result
                })
            })
       
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}