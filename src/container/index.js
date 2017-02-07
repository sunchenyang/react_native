import React,{Component} from 'react';
import {  Navigator} from 'react-native';
import { bindActionCreators } from 'redux';
import * as EssenceActions from '../actions/EssenceActions';
import * as TabActions from '../actions/TabActions';
import * as DetailActions from '../actions/DetailAction';
import * as ActionLoading from '../actions/ActionLoading';
import { connect } from 'react-redux';
import navigationBar from './navigationBar';
import TabView from './tabview';

class FeInnApp extends Component {
  constructor (props){
    super(props);
  }

  render (){
    const {state ,actions} = this.props;
    
    let defaultName ='精选';
    let defaultComponent = TabView;
    return (
      <Navigator 
        initialRoute={{name:defaultName ,component:defaultComponent}}
        configureScene={(route) =>{
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene = {(route, navigator) =>{
             console.log(route)
             let Component = route.component;
             return <Component {...this.props} {...route.params} navigator={navigator} />
        }}
        navigationBar = {navigationBar}
       />

    )
  }
}

const mapActionCreators = (dispatch) =>({
  essence : bindActionCreators(EssenceActions ,dispatch),
  tab : bindActionCreators(TabActions,dispatch),
  loading : bindActionCreators(ActionLoading,dispatch),
})

const mapStateToProps = (state) =>({
  Essence:state.Essence,
  Tab:state.Tab,
  Loading:state.Loading
})

        // <Essence {...this.props} />
export default connect (mapStateToProps,mapActionCreators)(FeInnApp)
