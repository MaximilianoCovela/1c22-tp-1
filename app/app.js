const express = require("express");
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.get("/ping", (req, res) => {
  res.status(200).send("ping");
});

app.get("/bbox9090", (req, res) => {
    axios.get(`http://bbox:9090/`)
        .then(result => {
            res.send(`${result.data}`);
        })
        .catch(err => {
            res.send(`${err.message}`);
        });
});

app.get("/bbox9091", (req, res) => {
  axios.get(`http://bbox:9091/`)
      .then(result => {
          res.send(`${result.data}`);
      })
      .catch(err => {
          res.send(`${err.message}`);
      });
});

app.get("/delay", (req, res) => {
  setTimeout(()=>{
    res.status(200).send("delay");
  })
});

app.get("/heavy", (req, res) => {
  let start = new Date();
  for (;;) {
    let now = new Date();
    if (now - start >= 50) {
      break;
    }
  }
  res.status(200).send("heavy");
});

app.listen(4000, () => {
  console.log("Escuchando en", 4000);
});
