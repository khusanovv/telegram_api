import { DataTypes, Model } from "sequelize";
import sequelize from "../lib/sequelize.js";

export class Group_Order extends Model{}

Group_Order.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false, 
        autoIncrement:true     
    }
},{timestamps:false,sequelize:sequelize})