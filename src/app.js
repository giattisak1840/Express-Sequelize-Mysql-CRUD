import express from "express";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

const { HOST, PORT } = process.env;

const App = () => {
  try {
    const app = express();
    app.use(logger("dev"));

    app.get("/", (req, res) => {
      res.status(200).send("Server is OK");
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default App;
