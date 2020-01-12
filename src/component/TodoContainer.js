import React from 'react';
import FilterLink from '../container/FilterLink';
import VisibleTodoList from '../container/VisibleTodoList';
import SerachInput from './SerachInput';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAclick = this.handleAclick.bind(this);
        this.state = {
            lt: [],
            link: [{
                text: 'all',
                active: true,
                id: 0,
            }, {
                text: 'completed',
                active: false,
                id: 1,
            }, {
                text: 'not completed',
                active: false,
                id: 2
            }],
            index_id: 0,
        }
    }
    handleInput(e) {
        e.preventDefault();
        const val = this.myRef.current.value;
        const lt = this.state.lt;
        const id = lt.length;
        const toggleClick = true;
        this.setState({
            lt: lt.concat({ val, id, toggleClick }),
        });
        this.myRef.current.value = '';
    }
    handleClick(val) {
        const lt = this.state.lt;
        lt[val].toggleClick = !lt[val].toggleClick;
        this.setState({
            lt
        })
    }
    handleAclick(index) {
        const link = this.state.link.map((val, ind) => (ind === index) ?
            { ...val, active: !val.active } :
            { ...val, active: false }
        )
        this.setState({
            link,
            index_id: index,
        })
    }
    render() {
        return (
            <div className='TC'>
                  <SerachInput handleInput={(e)=>this.handleInput(e)} myRef={this.myRef}/>
                      <ul>
                          <VisibleTodoList list={this.state.lt} index={this.state.index_id} handleClick={this.handleClick}/>
                      </ul>
                      <FilterLink handleAclick={this.handleAclick} link={this.state.link}/>
            </div>
        )
    }
}

export default TodoContainer;