import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`My first backend app is listening on: ${port}`);
});

console.log("Mangesh");
