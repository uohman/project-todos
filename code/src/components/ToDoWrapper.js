import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask';
import tasks from 'reducers/tasks';
import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
import Footer from './Footer';

export const ToDoWrapper = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  let preloadedState = {};
  const preloadedStateJSON = localStorage.getItem('reduxState')

  if (preloadedStateJSON) {
    preloadedState = JSON.parse(preloadedStateJSON)
  }

  const store = configureStore({ reducer, preloadedState })

  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TaskList />
          <AddTask />
          <Footer />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
