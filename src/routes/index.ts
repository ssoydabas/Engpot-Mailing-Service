import { Router } from "express";
import apiRouter from "./api";
import errorRouter from "./error";

const router = Router();

router.use("/api", apiRouter);
router.use(errorRouter);

export default router;
