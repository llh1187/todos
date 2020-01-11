import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './component/TodoContainer'
import './index.css';

class Index extends React.Component{
    render(){
        return(
        <TodoContainer />
        )
    }
}
// ========================================
/*渲染入口*/
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);