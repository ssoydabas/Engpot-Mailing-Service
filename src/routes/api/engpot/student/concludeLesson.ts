import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

// TODO  

const router = Router();

router.post("/concludeLesson", async (req, res, next) => {
  const { email: recipient, name, date } = req.body;
  try {
    const subject = ``;
    const html = createHtml(``, ``, ``);

    await mail("engpot", { recipient, subject, html });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
