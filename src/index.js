import express from "express";
const port = 3002;
const app = express();
import route from "./routes/index.js";
import bodyParser from "body-parser";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("success");
});
app.get("/test", (req, res) => {
  res.send("success!!");
});
route(app)

app.listen(port, () => {
  console.log(`listen in ${port}`);
});
