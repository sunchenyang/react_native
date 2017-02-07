import React,{Component} from 'react';
import {
  View ,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Comment from '../page/Comment'
export default class TabShow extends Component{
    constructor (props){
        super(props);
    }
    _onPress(){
        const {navigator,pageFlag,aid} = this.props;
         console.log(pageFlag,aid);
        if(pageFlag=='comment'){
            return navigator.push({
                component:Comment,
                params:{
                    aid:aid
                }
            })
        }else{
           navigator.pop()
        }
    }
    render(){
        return(
            <View style={this.props.wrapStyle}>
            <TouchableOpacity onPress={this._onPress.bind(this)}>
                <View style={styles.iconWrapper}>
                    {this.props.content}
                </View>
            </TouchableOpacity>
            </View>
        )
    }
}
const returnSize = 45;
const styles = StyleSheet.create({
    arrow:{
        flex:1,
        position:'absolute',
        left:20,
        bottom:25,
    },
    returnIcon:{
        flex:1,
        textAlign:'center'
    },
    iconWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.7)',
        height:returnSize,
        width:returnSize,
        borderRadius:returnSize/2,
    }
})