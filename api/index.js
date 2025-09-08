import serverless from "serverless-http";
import { createServer } from "../server/index.js"; // path to the file above

const app = createServer();

export default serverless(app);
