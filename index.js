const express = require('express');  //instalar express "npm install express"

const app = express(); // esta linea crea un servidor 
const PORT = process.env.PORT || 3001;// esta linea define en que direcccion trabaja 

app.get("/", (req, res)=>{   // es una ruta que al llamarla responde FUNCIONA   
res.send("Funciona")
})

app.listen(PORT, () => {   // es un console.log que nos ayuda a saber que el servidor esta levantado 
    console.log(`Listening on port: ${PORT}`);
});