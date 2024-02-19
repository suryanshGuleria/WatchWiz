import express from "express";

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to watchwiz app",
  });
});

//PORT
const PORT = 8080;

app.listen(PORT, () => {
  console.log("server running on port 8080");
});
