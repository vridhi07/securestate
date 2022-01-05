import * as constant from "../constants/index";

export const HandleFormInput = (e) => {
  let value = e.target.value;
  let name = e.target.name;
  return { type: constant.FORM_AUTH_INPUT, payload: { name, value } };
};
