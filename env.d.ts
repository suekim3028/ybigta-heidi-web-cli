import { CommonType } from "./src/types";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CommonType.EnvConfig {}
  }
}
