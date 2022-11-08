import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses (props){
    const [filterYear, setFilterYear] = useState('2019');
    const addFilterYear = (selectedYear) =>{
        setFilterYear(selectedYear);        
        console.log(`The selected Year from the filter is ${selectedYear}`);
    };
    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear() === parseInt(filterYear)
        );
    return(           
            <Card className='expense'>
                
                <ExpenseFilter onYearFilterHandler={addFilterYear} selected={filterYear}/>
                {
                    filteredExpenses.length === 0 ? <p>No Expense Found</p> : filteredExpenses.map((expense) =>
                    <ExpenseItem 
                        title={expense.title}
                        amount = {expense.amount}
                        date={expense.date}
                    />
                    )
                }                
            </Card>
    )
}

export default Expenses;