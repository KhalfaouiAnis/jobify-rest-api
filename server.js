import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// ##### middlewares ######
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("Trara");
});

app.use(`/api/v${process.env.API_VERSION}/auth`, authRouter);
app.use(`/api/v${process.env.API_VERSION}/jobs`, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = (async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.info(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();
