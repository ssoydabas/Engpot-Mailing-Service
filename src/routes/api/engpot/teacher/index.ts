import { Router } from "express";
import assignmentRouter from "../student/planLesson";

const router = Router();

router.use(assignmentRouter);

export default router;
