import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

const options={
    withRef:true
}
export default function connectComponent({mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponen}){
    return connect(
        mapStateToProps || function(state){
            return {};
        },
        mapDispatchToProps || function(dispatch){
            return{
                actions:bindActionCreators(actions, dispatch)
            }
        },
        mergeProps,
        options
    )(LayoutComponent);
}