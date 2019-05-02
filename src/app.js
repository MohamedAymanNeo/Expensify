//Imports
import  React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill',createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 10950}));


// Print Result
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx,document.getElementById("app"));