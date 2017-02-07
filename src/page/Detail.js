
import React,{Component} from 'react';
import {
  View ,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import * as DetailActions from '../actions/DetailAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Html from '../utils/Html';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import TabShow from '../components/TabShwo';
import { randomBg } from '../utils';
class Detail extends Component {
    constructor (props){
        super(props)
    }
    componentWillMount(){
        const { aid }=this.props;
        console.log(aid+"===aid==")
        const { getArticleDetail } = this.props.detail;
        getArticleDetail(aid)
    }
    render (){
        const  data  = this.props.Detail.data;
            console.log( data?data.id : null+"=====2222")
        const pointContent =(()=>{
            return(<Icon 
                name='md-arrow-back'
                size={30}
                color='rgba(255,255,255,1)'
            ></Icon>)
        })();
       const commentContent =(()=>{
           return(<Icon
            name='ios-text-outline'
            size={30}
            color='rgba(255,255,255,1)'
           ></Icon>)
       })();
        return(
             <View style={[styles.container]}>
            <ScrollView>
            <View style={[styles.container]}>
            {
                data?
                <View>
                  <View style={[styles.header,{backgroundColor:randomBg()}]}>
                    <View>
                        <Image style={[styles.authorImg]} source={{url:data.author.avatar_url}} />
                    </View>
                    <View style={[styles.autoWrap]}>
                        <Text style={{fontSize:18}}>
                            {data.title}
                        </Text>
                        <View >
                            <Icon name='ios-time'
                                size={12}
                                color='rgba(255,255,255,0.5)'
                                  style={styles.dateIcon}
                            />
                            <Text>
                            {moment(data.create_at).startOf('minute').fromNow()}
                            </Text>
                        </View>
                    </View>
                  </View>
                   <View style={{paddingHorizontal : 10}}>
                    <Html
                                router={this.props.navigator}
                                content={data.content}/>
                </View>
                </View>
                : null
            }
            </View>
            </ScrollView>
            
            <TabShow {...this.props}
                content={pointContent}
                wrapStyle={styles.wrapStyle}
            />
            <TabShow {...this.props} 
            content={commentContent}
             wrapStyle={styles.wrapStyle}
              pageFlag={'comment'}
                aid={data && data.id}
            />
            </View>
        )
    }
    
}
const authorImgHeight = 40;
const AuthorWidth = 100;
const {height, width} = Dimensions.get('window');
const defaultMaxImageWidth = width - 30 - 20;
const styles = StyleSheet.create({
  container : {
      flex : 1,
    paddingTop:65,
    paddingHorizontal : 5
  },
  header:{
      flex:1,
      alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  authorImg:{
      width:authorImgHeight,
      height:authorImgHeight,
      borderRadius:authorImgHeight/2
  },
  autoWrap:{
      width:width - AuthorWidth - 20,
      flexDirection:'column',
      paddingTop:20,
      paddingBottom:20
  },
  dateIcon:{
      width:12,
      height:16,
      marginRight:8
  },
  wrapStyle:{
      flex:1,
      position:'absolute',
      left:20,
      bottom:25,
  }
})
const mapActionCreators = (dispatch) => ({
  detail : bindActionCreators(DetailActions , dispatch),
})

const mapStateToProps = (state)=>
({
  Detail : state.Detail
})

export default connect (mapStateToProps , mapActionCreators)(Detail)