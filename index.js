const express = require("express");
const sequelize = require("./src/config/db");
const { Rol, Usuario } = require("./src/models");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
async function iniciarServidor() {
  try {
    // Probamos la conexión con Supabase
    await sequelize.authenticate();

    console.log("Conexión a Supabase exitosa");

    const roles = await Rol.findAll();
        console.log("Roles:", roles);

        const usuarios=await Usuario.findAll()
        console.log("Usuarios:", usuarios)

    // Levantamos Express solamente si la BD funciona
    app.listen(PORT, () => {
      console.log(` Servidor escuchando en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error al conectar a Supabase:");
    console.error(error);
  }
}

iniciarServidor();


app.get("/", (req, res) => {
  res.send("Funciona");
});