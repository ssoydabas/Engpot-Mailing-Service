import { Request, Response, NextFunction } from "express";

const handleError = (error: any, req: Request, res: Response) => {
  console.log("Error Handler Middleware: ", error);

  return res.json({
    errorMessage: error.message,
  });
};
export default handleError;
