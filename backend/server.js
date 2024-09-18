import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello Ngesa ");
});

app.listen(PORT, () => {
  console.log("Server is operational");
});
