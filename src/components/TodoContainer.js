import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodoContainer  from '../containers/AddTodoContainer';

const TodoContainer = () => {
    return (
        <div className='TC'>
              <AddTodoContainer />
              <ul>
                  <VisibleTodoList />
              </ul>
              <Footer />
        </div>
    )
}

export default TodoContainer;