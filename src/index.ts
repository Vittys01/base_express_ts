import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router } from "./Routes/routes";
import http from "http";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());

app.use('/', router);
const server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);