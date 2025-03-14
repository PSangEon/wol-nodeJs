import * as dotenv from 'dotenv';

delete process.env.PORT;
delete process.env.API_KEY;
delete process.env.DEVICES;

dotenv.config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("API_KEY가 설정되지 않았습니다.");
    process.exit(1);
}

const DEVICES = JSON.parse(process.env.DEVICES || '{}');

export { API_KEY, DEVICES, PORT };
