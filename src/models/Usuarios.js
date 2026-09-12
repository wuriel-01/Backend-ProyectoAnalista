const sequelize= require("../config/db")
const {DataTypes}= require("sequelize")

    const Usuario= sequelize.define("Usuarios",{
        dni:{
            type: DataTypes.STRING(20),
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING(50),
            allowNull:false,    
        },

        clave:{
            type:DataTypes.STRING(16),
            allowNull:false
        },

        id_rol:{
            type:DataTypes.BIGINT,
            allowNull:false
        }
    },

    {
    tableName: "usuarios",
    timestamps: false
  }

)

module.exports= Usuario;
