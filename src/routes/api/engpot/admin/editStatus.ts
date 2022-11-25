import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/editStatus", async (req, res, next) => {
  const { email: recipient, name, status } = req.body;
  try {
    const subject = `Hey! We have a new ${status}!`;
    const html = createHtml(
      `Hi ${name}!`,
      `You have a major update on EngPot English.`,
      `Welcome aboard!`
    );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
