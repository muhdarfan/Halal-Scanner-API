import express, { Express } from "express";
import CORS from "./src/Middleware/CORS";

const app = express();

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// router.use(CORS);

router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const PORT: any = process.env.APP_PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}.`);
});
