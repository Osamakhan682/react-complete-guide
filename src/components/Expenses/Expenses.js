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

    return(           
            <Card className='expense'>
                <ExpenseFilter onYearFilterHandler={addFilterYear} selected={filterYear}/>
                {
                    props.items.map((expense) =>
                    <ExpenseItem 
                        title={expense.title}
                        amount = {expense.amount}
                        date={expense.date}
                    />
                    )
                }


                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
    )
}

export default Expenses;