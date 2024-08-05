const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
//dot config path can be given in this case no path.
dotenv.config();
//mongodb connection
connectDB();
//rest object
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
const bloodRequestRoutes = require("./routes/bloodRequests");

// Use routes
app.use("/api/blood-requests", bloodRequestRoutes);

//port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT} `
      .bgBlue.white
  );
});
