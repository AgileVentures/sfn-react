import { ADD_LINK } from "./actonTypes";

export const addLink = (value = "") => {
  return {
    type: ADD_LINK,
    payload: value
  }
};