import * as types from '../actions/ActionTypes';
const tabInitState={
    isLoaging:false
}
export default function Loading(state=tabInitState , action={}){
     switch(action.type){
    case types.LOADING_LOAD:
      return Object.assign(
        {} , state ,{
          isLoaging:action.isLoaging
        }
      )
      break;
          default:
      return state;
     }
}