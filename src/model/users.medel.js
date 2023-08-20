import { DataTypes, Model } from "sequelize";
import sequelize from "../lib/sequelize.js";
export class User extends Model{}


User.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    second_name:{
        allowNull:true,
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    avatarca:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: "users",
    timestamps:true,
    sequelize: sequelize,
}) 
