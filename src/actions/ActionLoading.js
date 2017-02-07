import * as types from './ActionTypes';

export function isLoaging(isLoaging){
  return {
    type:types.LOADING_LOAD,
    isLoaging
  }
}