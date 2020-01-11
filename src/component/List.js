import React from 'react';

class List extends React.Component {

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
        return (list[0]) ? list.map((value, index) =>
            <li className='ListItem' key = {index} id = {index} onClick={()=>this.props.handleClick(value.id)} 
                        style={{textDecoration: value.toggleClick ? 'none' : 'line-through'}}
                    >
                        {value.val}
                    </li>) : ''
    }
}

export default List;