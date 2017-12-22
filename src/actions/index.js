export const ADD_LINK = "add_link";

export function addLink(value) {
  console.log('addLink: ' + value);
  return {
    type: ADD_LINK,
    payload: value
  }
}