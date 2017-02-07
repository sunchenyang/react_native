import * as types from './ActionTypes';

export function articleDetail(data){
    return{
        type :types.ARTICLE_DETAIL,
        data
    }
}
export function getArticleDetail(id){
    if(!id)return
    return(dispatch) =>{
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then(res => res.json())
        .then(json =>{
              console.log(json+"getArticleDetail")
              dispatch(articleDetail(json.data))
        })
        .catch( msg =>{
            console.log(msg)
        })
    }
}