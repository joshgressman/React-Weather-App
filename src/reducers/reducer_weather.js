import { FETCH_WEATHER } from '../actions/index';

//Reuces Data to manage what data is saved from the weater API

export default function(state = [], action) {

  switch (action.type){
    case FETCH_WEATHER:
    
    return [ action.payload.data, ...state];
    
  }

  return state;
}