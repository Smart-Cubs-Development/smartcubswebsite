import serverless from "serverless-http";
import { createServer } from "../src/server/createServer.js"; // path to the file above

const app = createServer();

export default serverless(app);
