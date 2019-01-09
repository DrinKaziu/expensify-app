import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: -2100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 6500, createdAt: 1100}));

store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
