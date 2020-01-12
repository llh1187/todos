import React from 'react';
import List from '../component/List';
class VisibleTodoList extends React.Component {

    render() {
        const index = this.props.index;
        let list;
        if (index == 0) {
            list = this.props.list;
        } else if (index == 1) {
            list = this.props.list.filter((value) => value.toggleClick == false)
        } else if (index == 2) {
            list = this.props.list.filter((value) => value.toggleClick == true)
        }
        return (
            <List list={list} handleClick={this.props.handleClick}/>
        )
    }
}

export default VisibleTodoList;