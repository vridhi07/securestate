import * as constant from "../constants/index";

export const getAssetData = (data) => {
  return { type: constant.GET_ASSET_DATA, payload: { data } };
};

export const assetModalClose = () => {
  console.log("I am called");
  return { type: constant.ASSET_MODAL_CLOSE };
};

export const assetModalOPen = () => {
  return { type: constant.ASSET_MODAL_OPEN };
};
