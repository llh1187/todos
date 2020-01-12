import React from 'react';
import Choose from '../component/Choose'
/*在FilterLink这里进行绑定事件*/
class FilterLink extends React.Component {
    render() {
        return (
            (this.props.link.length > 0) ? 
            this.props.link.map((value, index) => 
            	<Choose  key = {index} handleAclick={()=>this.props.handleAclick(index)} value={value}/>) 
            : ''
        )
    }
}
export default FilterLink;