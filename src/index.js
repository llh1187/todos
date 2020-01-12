import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);
class Index extends React.Component{
    render(){
        return (
        	<Provider store={store}>
		        <TodoContainer />
  			</Provider>
        )
    }
}

// ========================================
/*渲染入口*/
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);