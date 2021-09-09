import express from "express";
import logger from "morgan";

import sequelize from "./configs/sequelize-config";

import userRoutes from "./routes/user-routes";

const { HOST, PORT } = process.env;
const App = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(logger("dev"));

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.get("/", (req, res) => {
      res.status(200).send("Server is OK");
    });

    app.use("/user", userRoutes);

    app.listen(PORT, () => {
      console.log(`Server is listening on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default App;
