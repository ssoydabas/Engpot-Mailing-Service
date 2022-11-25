import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/planLesson", async (req, res, next) => {
  const { email: recipient, name, date } = req.body;
  try {
    const subject = `You have a new lesson!`;
    const html = createHtml(
      `Hi ${name}!`,
      `Your lesson will be at ${date.hour}:${date.minute} on ${date.monthName} ${date.day}.`,
      `Have a great lesson!`
      );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
