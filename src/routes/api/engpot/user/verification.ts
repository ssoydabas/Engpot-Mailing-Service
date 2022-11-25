import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/verification", async (req, res, next) => {
  const { email: recipient, name, link } = req.body;
  try {
    const subject = "Welcome to EngPot English!";
    const html = createHtml(
      `Hi ${name}!`,
      `Welcome aboard! Please verify your email so you can make use of our all world!`,
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
