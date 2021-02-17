import express from "express";
import mongoose from "mongoose";
import Weight from "./Schema/dbWeight.js";

const app = express();
const router = express.Router();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://liou970921:liou970921@cluster0.v3aia.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB Connected");
});

//API Routes
app.use("/", router);
app.get("/", (req, res) => res.status(200).send("hello world"));

//API that post the weight to mongodb
router.route("/fetch").get(function (req, res) {
  Weight.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));