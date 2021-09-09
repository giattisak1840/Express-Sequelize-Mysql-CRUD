import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize-config";

const User = sequelize.define('User', {
    givenname: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER
})

User.sync({alter: true});

export default User;
