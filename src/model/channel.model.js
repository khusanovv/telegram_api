import { DataTypes, Model } from "sequelize";
import sequelize from "../lib/sequelize.js";

export class Channel extends Model{};

Channel.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false, 
        autoIncrement:true     
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    title:{
        type:DataTypes.STRING,
    },
    link:{
        type:DataTypes.STRING,
        unique:true
    },
    avatarca:{
        type:DataTypes.STRING
    }
    ,
    onwer_id:{
        type:DataTypes.INTEGER
    }
},{tableName: "channel", sequelize:sequelize ,timestamps:false})