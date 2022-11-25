import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/assignment", async (req, res, next) => {
  const { email: recipient, name, assignmentTitle } = req.body;
  try {
    const subject = `You have a new assignment!`;
    const html = createHtml(
      `Hi ${name}!`,
      `Please do not forget to complete your assignment before the deadline :)`,
      `Assignment Title: ${assignmentTitle}`
    );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/assignment/mark", async (req, res, next) => {
  const { email: recipient, name, assignmentTitle } = req.body;
  try {
    const subject = `Your assignment has been marked!`;
    const html = createHtml(
      `Hi ${name}!`,
      `Your teacher has checked your homework, go check your note!`,
      `Assignment Title: ${assignmentTitle}`
    );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
