import { Router } from "express";
import engpotRouter from "./engpot";

const router = Router();

router.use("/engpot", engpotRouter);

export default router;
