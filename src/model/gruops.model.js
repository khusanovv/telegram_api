import { DataTypes, Model } from "sequelize";
import sequelize from "../lib/sequelize.js";

export class Group extends Model{};

Group.init({
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
        type:DataTypes.INTEGER,
    }
},{tableName: "guruh", sequelize:sequelize ,timestamps:false})