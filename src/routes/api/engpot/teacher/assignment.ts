import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/assignment", async (req, res, next) => {
  const { email: recipient, studentName, assignmentTitle } = req.body;
  try {
    const subject = `${studentName} has completed an assignment!`;
    const html = createHtml(
      `Please do not forget to mark your student's assignment with a well-organized note.`,
      `Assignment Title: ${assignmentTitle}`,
      null
    );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
