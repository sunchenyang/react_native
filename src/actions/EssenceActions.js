import * as types from './ActionTypes';

export function essenceList(data,getState){
  let oldList = (getState().Essence && getState().Essence.data) || data

  if(oldList.length){
    data.map((v,k) =>{
      oldList.push(v);
    })
  }
  return {
    type : types.INDEX_LIST,
     data:oldList
  }
}

export function isDownLoad(isLoad){
  return {
    type:types.DOWN_LOAD,
    isLoad
  }
}


export function getList(params , cd){
  return (dispatch,getState) =>{
    fetch('https://cnodejs.org/api/v1/topics?'+params).then(res => res.json()).then(json =>{
      cd && cd()
       console.log(json+"================")
       dispatch(essenceList(json.data,getState))
    })
    .catch( mes =>{
       console.log(mes+"-----error-------")
    })
  }
}
export function articleDetail(){
  return{
    type:types.ARTICLE_DETAIL,
    detail
  }
}
export function getArticleDetail(){
  if(!id) return;
  return (dispatch) => {
    fetch('https://cnodejs.org/api/v1/topic/' + id)
    .then(res => res.json())
    .then(json =>{
      dispatch(essenceList(json.data))
    })
    .catch( msg =>{
      console.log(msg)
    })
  }
}