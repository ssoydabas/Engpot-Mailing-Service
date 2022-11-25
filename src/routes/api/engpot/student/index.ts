import { Router } from "express";
import planLessonRouter from "./planLesson";
import concludeLessonRouter from "./concludeLesson";
import assignmentRouter from "./assignment";

const router = Router();

router.use(planLessonRouter);
router.use(concludeLessonRouter);
router.use(assignmentRouter);

export default router;
