import { resolve } from "path";
import * as dotenv from "dotenv";

if ((process.env.NODE_ENV as string) === "development") {
  dotenv.config({ path: resolve(__dirname, "../../env/.env.development") });
}
if ((process.env.NODE_ENV as string) === "production") {
  dotenv.config({ path: resolve(__dirname, "../../env/.env.production") });
}
