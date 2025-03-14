import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("API_KEY가 설정되지 않았습니다.");
    process.exit(1);
}

const DEVICES = JSON.parse(process.env.DEVICES || '{}');

console.log(DEVICES.main);

export { API_KEY, DEVICES, PORT };
