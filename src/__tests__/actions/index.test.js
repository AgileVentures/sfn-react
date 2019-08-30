import { addLink } from "../../actions";
import { ADD_LINK } from "../../actions/actonTypes";

describe('#addLink', () => {
  it('has a ADD_LINK type', () => {
    const action = addLink("hello");
    expect(action.type).toEqual(ADD_LINK);
  })

  it('has a valid type', () => {
    const action = addLink("hello");
    expect(action.type).not.toEqual("SOME_TYPE");
  })

  it('returns passed argument as payload', () => {
    const action = addLink("hello");
    expect(action.payload).toEqual("hello");
  })

  it('return an empty string if no argument passed', () => {
    const action = addLink();
    expect(action.payload).toEqual("");
  })
});