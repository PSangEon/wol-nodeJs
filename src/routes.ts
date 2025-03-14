import { Router, Request, Response } from "express";
import { API_KEY, DEVICES } from "./config";
import { wakeDevice } from "./wolService";

const router = Router();

router.get("/wake", async (req: Request, res: Response): Promise<void> => {
  const { key, device } = req.query;

  if (key !== API_KEY) {
    res.status(403).json({ success: false, message: "잘못된 API 키" });
    return; // <<== 반환을 명확하게 추가!
  }

  if (!device || typeof device !== "string") {
    res.status(400).json({ success: false, message: "기기 이름이 필요합니다." });
    return;
  }

  if (!DEVICES[device]) {
    res.status(400).json({ success: false, message: "존재하지 않는 기기입니다." });
    return;
  }

  try {
    const success = await wakeDevice(device);
    if (success) {
      res.json({ success: true, message: `WOL 패킷 전송 성공: ${device}` });
    } else {
      res.status(500).json({ success: false, message: "WOL 패킷 전송 실패" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, message: "서버 오류", error: error.message });
    } else {
      res.status(500).json({ success: false, message: "알 수 없는 오류 발생" });
    }
  }
});

export default router;
