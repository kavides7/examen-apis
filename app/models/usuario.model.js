const Usuario = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false // Asegúrate de que este campo no sea nulo
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true // Para evitar duplicados
        },
        contraseña: {
            type: Sequelize.STRING, // Cambiado a STRING para almacenar contraseñas
            allowNull: false // Asegúrate de que este campo no sea nulo
        },
        fecha_ingreso: {
            type: Sequelize.DATE, // Cambiado a DATE para almacenar correctamente la fecha
            defaultValue: Sequelize.NOW // Valor por defecto para la fecha de ingreso
        }
    });

    return Usuario;
};

module.exports = Usuario;
