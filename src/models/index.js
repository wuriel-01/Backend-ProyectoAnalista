const Rol = require("./Rol")
const Usuario= require("./Usuarios")

// Un rol puede tener muchos usuarios
Rol.hasMany(Usuario, {
    foreignKey: "id_rol"
});

// Un usuario pertenece a un rol
Usuario.belongsTo(Rol, {
    foreignKey: "id_rol"
});

module.exports = {
    Rol,
    Usuario
};