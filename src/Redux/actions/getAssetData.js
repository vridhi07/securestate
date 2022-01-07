import * as constant from "../constants/index";

export const getAssetData = (data) => {
  return { type: constant.GET_ASSET_DATA, payload: { data } };
};
