
import React,{Component} from 'react';
import {
  View ,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Detail from './Detail';
import Loading from './Loading';
import RefreshableListView from 'react-native-refreshable-listview';
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
var page = 1;
export default class Essence extends Component {
  constructor (props){
    super(props);
  }
  componentWillMount(){
    let params = `page=${page}&limit=5`;
    this._getList(params);
    
  }
  linkToArticle(e,rowData){
    const {navigator } = this.props;
    if(!rowData)return;
         console.log(rowData.id+'========id========');
    navigator.push({
      name:rowData.title,
      component:Detail,
      params:{
        aid:rowData.id
      }
    })
  }
  _renderRow(rowData, sectionID, rowID, highlightRow){
   // console.log(rowData, sectionID, rowID, highlightRow)
    return(
      <TouchableOpacity
        key={rowData.id}
        onPress={ (e)=>{this.linkToArticle(e,rowData)}}
      >
      <View style={[styles.rows]}>
     
       <View style={[styles.content]}>
        <Text style={[styles.articleTitle]}
           numberOfLines={1}
          >
            {rowData.title}
          </Text>
          <View style={[styles.articleDec]}>
            <View style={{flex:2,flexDirection:'row'}} >
              <View style={{flexDirection:'row', justifyContent : 'center'}}>
                <Icon name='ios-eye-outline' size={22} color="#333"></Icon>
                 <Text style={[styles.dec]}>{rowData.visit_count}</Text>
              </View>
              <View style={{flexDirection:'row', justifyContent : 'center'}}>
                  <Icon name="ios-text-outline" size={22} color="#333" />
                  <Text style={[styles.dec]}>{rowData.reply_count}</Text>
              </View>
              <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                <Text style={[styles.dec]} >{rowData.tab}</Text>
                {
                    rowData.good ?
                <Text style={[styles.tag]}>精华</Text> : null
                }
                {
                  rowData.top?<Text style={[styles.tag]}>置顶</Text>:null
                }
              </View>
            </View>
          </View>
       </View>
      </View>
    </TouchableOpacity>
    )
  }
  _lodeData(){
    let params = "page=1&limit=5"
    return this._getList(params);
  }
  _getList(params,cd){
    const { getList } = this.props.essence;
      const { isLoaging } = this.props.loading;
      isLoaging(true);
    getList(params,()=>{
      isLoaging(false);
    })
  }
  _onReached(){
    const { isDownLoad } = this.props.essence;
    isDownLoad(true);
    let params =  `page=${++page}&limit=5`
    this._getList(params,()=>{
      isDownLoad(false);
    });
  }
  render (){
       const { data,downLoadStatus } = this.props.Essence;
        const { isLoaging } = this.props.Loading;
         console.log(downLoadStatus+'downLoadStatus========');
       console.log(isLoaging+'======isLoaging========');
    return (
      <View style={[styles.container]}>
      {
          data ?
          <RefreshableListView
             dataSource={ds.cloneWithRows(data)}
             renderRow={this._renderRow.bind(this)}
             initialListSize={5}
             onEndReachedThreshold={0}
             onEndReached={this._onReached.bind(this)}
             pageSize={3}
             loadData={this._lodeData.bind(this)}
             showsVerticalScrollIndicator={true}
             removeClippedSubviews={true}
             pagingEnabled={true}
             refreshDescription='正在加载...'
             
              renderFooter={null}
          />
          :null
        }{
          downLoadStatus?
          <View style={[styles.loadTips]}>
            <Text style={[styles.loadTipsText]}>正在加载....</Text>
          </View>:null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop:66,
    paddingVertical:5
  },
  rows :{
    padding:10,
    borderBottomWidth : 1,
    borderStyle : 'solid',
    borderBottomColor : '#eee',
    flexDirection : 'row',
    height : 80
  },
  article:{
    width:50,
    height:50,
    borderRadius:25
  },
  link:{
    padding:10,
    paddingHorizontal:20,
    borderRadius:3,
    borderColor:'blue',
    borderWidth:1,
    marginTop:20
  },
  content:{
    flex :1,
    paddingLeft:8
  },
  articleTitle:{
    fontSize:16,
    flex:1
  },
  articleDec:{
    flexDirection:'row',
     alignItems : 'center',
    flex : 1
  },
  dec:{
    lineHeight:20,
    marginHorizontal:5
  },
  loadTips:{
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'center',
    height:36,
  },
  loadTipsText:{
    fontSize:16,
    color:'#ccc',
  }
})
