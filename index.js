const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(response);
  response.send("Hello World");
});

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`Todays date is ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
