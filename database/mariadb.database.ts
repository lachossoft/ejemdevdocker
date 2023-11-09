import { Sequelize } from "sequelize";

const Mariadb = new Sequelize('Pruebas','root','123456',{
    host: 'mariadb',
    dialect: 'mariadb'
    //logging false
})

export default Mariadb