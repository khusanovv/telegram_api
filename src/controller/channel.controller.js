import Jwt from "jsonwebtoken"
import { Channel, User } from "../model/index.js"
import { Orders } from "../model/order.js"

export async function post_Chennel (req,res) {
try {
    let Channels = await Channel.findAll({where:{link:req.body.link}})

    if (Channels.length) {
        return res.status({message:"link is invalid"})
    }

    let {type,title,link,avatarca} = req.body

     let {token} = req.headers
     let {username} = Jwt.verify(token,process.env["secretKey"])
    
     
     await User.findOne({where:{username}}).then(async (result) =>{

        let data = await Channel.create({

            type,link,title,avatarca,onwer_id:result.id

        })
          Orders.create({user_id:result.id,group_id:data.id})

          return res.status(201).json({message:"group succes add",data})
      })
} catch (error) {
    console.log("ds");
    return res.status(500).json({message:error.message + " saxas"})
}
}


