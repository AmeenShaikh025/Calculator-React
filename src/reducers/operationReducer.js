import { evaluate } from "mathjs";
//Actions

export const KEYADD = "KEYADD";
export const KEYACTION = "KEYACTION";
export const KEYCLEAR = "KEYCLEAR";

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
      //console.log(state.exp);
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
    default:
      return state;
  }
}
