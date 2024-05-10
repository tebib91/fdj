import { Request, Response, NextFunction } from "express";

export function logRequests(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const now = new Date();
  const { method, originalUrl, ip, httpVersion } = req;
  const userAgent = req.get("User-Agent") || "Unknown";

  // Response listener to log the status after the response is finished
  res.on("finish", () => {
    const { statusCode } = res;
    const logMessage = `${now.toISOString()} - ${method} ${originalUrl} HTTP/${httpVersion} from ${ip} ${statusCode} "${userAgent}"`;
    console.info(logMessage);
  });

  next();
}
