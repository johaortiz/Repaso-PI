import { GET_ALL_CHARACTERS, GET_EPISODES } from "../actions/actions";

const initialState = {
    characters: [],
    episodes: []
};

export default function rootReducer(state=initialState, actions) {
  switch(actions.type){
      case GET_ALL_CHARACTERS:
          return{
            ...state,
            characters: actions.payload
          }
          case GET_EPISODES:
            return{
              ...state,
              episodes: actions.payload
            }
        default:
            return state;
  }
}

