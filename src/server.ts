import express from "express";
import router from "./routes";
import { PORT } from "./config";

const app = express();

app.use(express.json()); // JSON 요청을 처리할 수 있도록 설정
app.use("/", router); // 미들웨어로 등록

app.listen(PORT, () => {
    console.log(`WOL 서버가 http://localhost:${PORT} 에서 실행 중`);
});