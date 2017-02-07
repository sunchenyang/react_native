import * as types from '../actions/ActionTypes';

const tabInitState = {
  selectedTab : 'essence'
}
export default function Tab (state=tabInitState , action={}){
  switch (action.type) {
    case types.TAB_CHANGE:
      return Object.assign(
        {} , state , {
          selectedTab : action.selectedTab
        }
      )
    default:
      return state;
  }
}
