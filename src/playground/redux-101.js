import {createStore, bindActionCreators} from 'redux';

// Action Generators - functions that return action objects

// Increment Function
const incrementCount = ({incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

// Decrement Function
const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

// Set Function 
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reset Function
const resetCount = () => ({
    type: 'RESET',
});

const countReducer = (state= {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);



const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// SET
store.dispatch(setCount({ count: 10}));


// INCREMEANT
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 20 }));

// RESET
store.dispatch(resetCount());

// DECREAMENT
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 5 }));

// unsubscribe();




