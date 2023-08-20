import Sequelize from "sequelize";

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/forexam', {logging:false});

export default sequelize;

