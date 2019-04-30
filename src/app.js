//Imports
import  React  from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/stores/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';



// Create Instance For Store
const store = configureStore();

// Create 2 Expenses
store.dispatch(addExpense({description: 'Water Bill'}))
store.dispatch(addExpense({description: 'Gas Bill'}))

// Filter Depend on Text
store.dispatch(setTextFilter('Bill'));


// Print Result
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />,document.getElementById("app"));