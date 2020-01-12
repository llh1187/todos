import React from 'react';

class List extends React.Component {

    render() {
        const list = this.props.list;
        return (list[0]) ? list.map((value, index) =>
            <li className='ListItem' key = {index} id = {index} onClick={()=>this.props.handleClick(value.id)} 
                style={{textDecoration: value.toggleClick ? 'none' : 'line-through'}}
            >
                {value.val}
            </li>) : ''
    }
}

export default List;