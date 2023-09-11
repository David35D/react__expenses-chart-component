import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    return (
        <div className='expenses'>
            <h3 className='expenses-heading'>Spending - Last 7 days</h3>
            <ExpensesChart 
                items={props.data}
            />
            <hr/>
            <div className='expenses-footer'>
                <p>Total this month</p>
                <div className='flex-row'>
                    <h3 className='expenses-total'>$478.33</h3>
                    <div>
                        <p className='last-month__percentage'>+2.4%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expenses;