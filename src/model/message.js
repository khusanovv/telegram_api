import { DataTypes, Model } from "sequelize";
import sequelize from "../lib/sequlize.js";


export class Message extends Model{};



Message.init({
    Message:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    firs_name:{
        type:DataTypes.TEXT, 
    },
    avatar:{
        type:DataTypes.TEXT,
    },
    Message_data:{
        type:DataTypes.TIME,
    }

},{sequelize,timestamps:false,tableName:"Message"})