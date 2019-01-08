import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: -2100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 6500, createdAt: 1100}));

store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
