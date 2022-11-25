import { Router } from "express";
import verificationRouter from "./verification";
import resetPasswordRouter from "./resetPassword";

const router = Router();

router.use(verificationRouter);
router.use(resetPasswordRouter);

export default router;
