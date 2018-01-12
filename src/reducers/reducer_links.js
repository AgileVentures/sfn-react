import { ADD_LINK } from "../actions";

export default function(state=[],action){
  console.log('action: ' + action.type);
  console.log('state: ' + state);
  switch (action.type){
    case ADD_LINK:
      console.log('action.payload: ' + action.payload);
      var new_state = state.concat(action.payload);
      console.log('new_state: ' + new_state);
      return new_state;
    default: 
      return state;
  }
}