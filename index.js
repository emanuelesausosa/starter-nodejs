// import
const suma = require("./Modulos/Suma");
const path = require("path");
const bodyParser = require("body-parser");

// console.log(suma(50, 60));

// 1. importar la libreria express
const express = require("express");

// 2. instanciar un objeto de tipo server/applicacion a partir de express
const app = express();

// establecer un midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3. declarar un variable que guarde el puerto
const port = 3000;

//~4. crear una ruta HTTP
app.get("/", (req, res) => {
  // res.send("Hola mundo");
  res.sendFile(path.join(__dirname, "./Views/index.html"));
});

// callback function
app.get("/suma/:numeroA/:numeroB", (req, res) => {
  // console.log(req.params.numeroA);

  // get parametros
  let numA = parseFloat(req.params.numeroA);
  let numB = parseFloat(req.params.numeroB);

  // calcula la suma
  let result = suma(numA, numB);

  // envia el response status code: 200 y data en json
  res.status(200).json(result);
});

// post suma
app.post("/sumar", (req, res) => {
  console.log(req.body.a);
  console.log(req.body.b);
  res.status(200).json("Hola");
});

// 5. inicializar el listener del servidor
app.listen(port, () => {
  console.log("Server start on http://localhost:" + port);
});
