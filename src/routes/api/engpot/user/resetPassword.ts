import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/resetPassword", async (req, res, next) => {
  const { email: recipient, link } = req.body;
  try {
    const subject = "You forgot your password?";
    const html = createHtml(
      `Hi EngPotter!`,
      `A reset token has been assigned to your account, please click the link below to renew your password.`,
      `Link: <a href="${link}">Click Here!<a/>`
    );

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
