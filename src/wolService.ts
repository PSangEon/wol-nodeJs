import wol from "wol"

import { DEVICES } from "./config";

export const wakeDevice = async (deviceName: string): Promise<boolean> => {
    const mac = DEVICES[deviceName];
    if (!mac) {
        throw new Error(`"${deviceName}" 기기가 존재하지 않습니다.`);
    }

    return wol.wake(mac);
};
