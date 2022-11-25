import { Router } from "express";
import mail from "../../../../util/nodemailer";
import createHtml from "../../../../util/html/engpot";

const router = Router();

router.post("/editPair/add", async (req, res, next) => {
  const { teacher, student } = req.body;
  try {
    const subject_t = "You have a new student!";
    const html_t = createHtml(
      `Hi ${teacher.name}!`,
      `A new student ${student.name} has been added to your student list.`,
      `Feel free to reach to your new student :)`
    );

    await mail("engpot", {
      recipient: teacher.email,
      subject: subject_t,
      html: html_t,
    });

    const subject_s = "You have a new teacher!";
    const html_s = createHtml(
      `Hi ${student.name}!`,
      `Your new teacher is ${teacher.name}.`,
      `Feel free to ask anything to your teacher in your first lesson :)`
    );

    await mail("engpot", {
      recipient: student.email,
      subject: subject_s,
      html: html_s,
    });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/editPair/remove", async (req, res, next) => {
  const { teacher, student } = req.body;
  try {
    const subject_t = "One of your students is no longer your student!";
    const html_t = createHtml(
      `Hi ${teacher.name}!`,
      `Your student ${student.name} is not your student anymore. This doesn't mean that you are no longer friends, though :)`,
      null
    );

    await mail("engpot", {
      recipient: teacher.email,
      subject: subject_t,
      html: html_t,
    });

    const subject_s = "You have no longer a teacher on EngPot English!";
    const html_s = createHtml(
      `Hi ${student.name}!`,
      `Your teacher ${teacher.name} is not your teacher anymore. This doesn't mean that you are no longer friends, though :)`,
      null
    );

    await mail("engpot", {
      recipient: teacher.email,
      subject: subject_s,
      html: html_s,
    });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
