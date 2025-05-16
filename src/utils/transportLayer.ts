import { CHAR_PEN } from "../consts.ts";

export const useAirlines = () =>
  import.meta.env.PUBLIC_AIRLINES.split(CHAR_PEN);
export const useRoads = () => import.meta.env.PUBLIC_ROADS.split(CHAR_PEN);
