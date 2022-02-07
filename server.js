import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// ##### middlewares ######
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import authUser from "./middlewares/auth.js";

const app = express();
dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

const version = process.env.API_VERSION;

app.use(`/api/v${version}/auth`, authRouter);
app.use(`/api/v${version}/jobs`, authUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
