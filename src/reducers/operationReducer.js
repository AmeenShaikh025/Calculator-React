import { evaluate } from "mathjs";
//Actions

export const KEYADD = "KEYADD";
export const KEYACTION = "KEYACTION";
export const KEYCLEAR = "KEYCLEAR";
export const BACKKEY = "BACKKEY";

//action creator

export const keyAdd = data => {
  return {
    type: KEYADD,
    payload: data
  };
};

export const keyAction = () => {
  return {
    type: KEYACTION
  };
};

export const clearKey = () => {
  return {
    type: KEYCLEAR
  };
};

export const backKey = () => {
  return {
    type: BACKKEY
  };
};

const initialState = {
  exp: ""
};

export default function operationReducer(state = initialState, action) {
  switch (action.type) {
    case KEYADD:
      return {
        exp: state.exp + action.payload
      };
    case KEYACTION:
      if (state.exp) {
        return {
          exp: evaluate(state.exp)
        };
      } else {
        return state;
      }
    case KEYCLEAR:
      return {
        exp: ""
      };
    case BACKKEY:
      let storeVal = Array.from(state.exp);
      if (storeVal.length > -1) {
        storeVal.splice(storeVal.length - 1, 1);
      }
      storeVal = String(storeVal)
        .split(",")
        .join("");
      return {
        exp: storeVal
      };
    default:
      return state;
  }
}
