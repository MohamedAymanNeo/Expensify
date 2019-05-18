import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
    state= {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        errorMsg: ""
    };
    onDescriptionChange = (e) => {
        const description = e.target.value
        
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //here check if is no amount or matching the expression
            this.setState(() => ({ amount }))
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ errorMsg: "you Should Fill the Empty inputs" }));
        } else {
            this.setState(() => ({errorMsg: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount , 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render(){
        return (
            <div>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value= {this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type= "number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value= {this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="add a note to your expense (optional)"
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}