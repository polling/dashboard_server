import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import MonitoringService from "./services/monitoring.js";
import authRoutes from "./routes/auth.js";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managerRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/**
 * Mock data imports
 */
// import User from "./models/User.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";
// import {
//   dataUser,
//   dataProduct,
//   dataProductStat,
//   dataTransaction,
//   dataOverallStat,
//   dataAffiliateStat,
// } from "./data/index.js";

/**
 * Configuration
 */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * Routes
 */
app.use("/auth", authRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managerRoutes);
app.use("/sales", salesRoutes);

/**
 * Mongoose setup
 */
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => MonitoringService.log(`Server port: ${PORT}`));

    /* Dummy data for mongoDB */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((err) => MonitoringService.error(`${err} didn't connect`));