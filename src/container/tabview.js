import React,{Component} from 'react';
import {
  Navigator ,
  View ,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="ios-time" size={30} color="#900" />)
import Essence from '../page/Essence';
import Article from '../page/Article';
import Welfare from '../page/Welfare';

export default class TabView extends Component{
    constructor (props){
        super(props)
    }
    _renderComponent (){ 

    }
    isActive (currentTab){
        const { Tab } = this.props;
        console.log(Tab);
        if(Tab.selectedTab == currentTab){
            return true;
        }
        return false;
    }
     render(){
        
         const { tabChange } = this.props.tab;
          return(
              <TabNavigator>
               <TabNavigator.Item
                title="精选"
                renderIcon={()=> <Icon 
                    name='ios-home-outline'
                    size={25}
                    color='#000'
                    />}
                renderSelectedIcon={()=> <Icon
                        name='ios-home'
                        style={[styles.selectedIcon]}
                       size={ 25 }     
                    />}
                 selectedTitleStyle={styles.selectedTitleStyle}   
                selected={this.isActive('essence')}
                onPress={()=>{tabChange('essence')}}
               >
               <View style={{flex:1}} ><Essence {...this.props}/></View>
               </TabNavigator.Item>

               <TabNavigator.Item
                  selected={this.isActive('article')}
                    title="发现"
                  renderIcon={()=> <Icon 
                      name='ios-eye-outline'
                      size={ 25 }
                      color='#000'/>}
                  renderSelectedIcon={()=> <Icon
                      name='ios-eye'
                      size={ 25 }
                        style={[styles.selectedIcon]}
                      />}
                    selectedTitleStyle={styles.selectedTitleStyle}      
                 onPress={()=>{tabChange('article')}}         
               >
               <View style={{flex:1}}><Article {...this.props} /></View>
               </TabNavigator.Item>
                 <TabNavigator.Item
                  selected={this.isActive('welfare')}
                    title="福利"
                    renderIcon={()=><Icon
                      name='ios-heart-outline'
                      size={ 25 }
                      color='#000'
                   />}
                   renderSelectedIcon={()=><Icon
                        name='ios-heart'
                        size={25}
                          style={[styles.selectedIcon]}
                       />}
                        selectedTitleStyle={styles.selectedTitleStyle}    
                     onPress={()=>{tabChange('welfare')}}
                    >
                 <View style={{flex:1}}><Welfare {...this.props} /></View>
                 </TabNavigator.Item>
              </TabNavigator>
          )
     }
}
const styles = StyleSheet.create({
	tabbarAndroid: {
		flex: 1,
	},
    selectedTitleStyle:{
         color:'#FED814',
         fontSize:10
    },
    selectedIcon:{
         color:'#FED814',
    }
});