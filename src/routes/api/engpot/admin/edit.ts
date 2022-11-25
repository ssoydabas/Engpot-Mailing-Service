import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/edit", async (req, res, next) => {
  const { email: recipient, name } = req.body;
  try {
    const subject = "A new update to your account!";
    const html = createHtml(
      `Hi ${name}!`,
      `Your account has been updated by EngPot English.`,
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
