module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        
        contraseña: {
            type: Sequelize.INTEGER
        },
        fecha_ingreso: {
            type: Sequelize.INTEGER
        }

    });
    return Usuario;
};