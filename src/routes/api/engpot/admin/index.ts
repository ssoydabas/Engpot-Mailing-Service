import { Router } from "express";
import editRouter from "./edit";
import editPairRouter from "./editPair";
import editStatusRouter from "./editStatus";

const router = Router();

router.use(editRouter);
router.use(editPairRouter);
router.use(editStatusRouter);

export default router;
