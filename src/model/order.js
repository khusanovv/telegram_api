import { DataTypes,Model } from "sequelize";
import sequelize from "../lib/sequelize.js";

export class  Orders extends Model{}

Orders.init({
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    }
    
    
},{
    tableName:"orders",
    timestamps:false, 
    sequelize: sequelize})

