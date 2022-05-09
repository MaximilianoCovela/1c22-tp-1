const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("ping");
});

app.get("/delay", (req, res) => {
  setTimeout(()=>{
    res.status(200).send("delay");
  })
})

app.get("/heavy", (req, res) => {
  let start = new Date();
  while(new Date() - start < 5000);
  res.status(200).send("heavy");
})

app.listen(3500, () => {
  console.log("Escuchando en", 3500);
})
