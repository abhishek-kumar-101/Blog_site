/*
Use of all the packages installed
mongoose-->for database connectivity with server
colors-->for adding some colors to the outputs in terminal
morgan-->to see api requests and related info in console
cors-->since we have two servers (react and node) servers . Hence it helps prevent cross origin error
dotenv-->to hide confidential data
bcrypt-->for hashing our passwords
*/

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connecDB = require("./config/connectDB");

//env config
dotenv.config(); //if the dotenv file was in some other directory then we would need to give it's path too inside the parenthesis.

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connecDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
/* app.get("/", (req, res) => {
  res.status(200).send({
    message: "Node server",
  });
}); */
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//PORT
const PORT = process.env.PORT || 8080;
const DEV_MODE = process.env.DEV_MODE;

//listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${DEV_MODE} mode on port no ${PORT}`.bgCyan.white
  );
});
