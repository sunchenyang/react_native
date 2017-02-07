import React,{Component} from 'react';
import {
  View ,
  Text,
  StyleSheet
} from 'react-native';
class Loading extends Component {
   constructor (props){
    super(props);
  }
  render (){
    return (
      <View style={[styles.container]}>
        <Text style={{fontSize:30,color:'	#00FF00'}}>请稍后</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'yellow'
  }
})