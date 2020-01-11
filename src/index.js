import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SerachInput extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleInput}>
                            <input className='SI' placeholder='please input anything you want~' ref={this.props.myRef}/> 
                        </form>
        );
    }
}

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

class Choose extends React.Component {
    render() {
        return (
            (this.props.link.length > 0) ? this.props.link.map((value, index) =>
                <button  key = {index} onClick={()=>this.props.handleAclick(index)} disabled={value.active}>
                        {value.text}
                    </button>) : ''
        )
    }
}

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
                          <List list={this.state.lt} index={this.state.index_id} handleClick={this.handleClick}/>
                      </ul>
                      <Choose handleAclick={this.handleAclick} link={this.state.link}/>
            </div>
        )
    }
}
// ========================================
/*渲染入口*/
ReactDOM.render(
  <TodoContainer />,
  document.getElementById('root')
);