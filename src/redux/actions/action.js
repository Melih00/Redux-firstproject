import { SELL_COMP, SELL_LAPTOP, SELL_PHONE, SELL_WATCH } from "../types/types";

export const sellLaptop = (e) => ({ type: SELL_LAPTOP , payload: e });
export const sellPhone = (e) => ({ type: SELL_PHONE, payload: e });
export const sellComp = () => ({ type: SELL_COMP });
export const sellWatch = () => ({ type: SELL_WATCH });
