import { Orders } from "../model/order.js";


export const addCreate =  async (req, res) =>{
    try {
        const {user_id, group_id} = req.body 

        const data = await Orders.create({user_id, group_id })

        return res.send(data)
    } catch (error) {
        console.log(error+"group_id saxsax");
    } 
}
