import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    return (
        <Chart 
            dataPoints={props.items}
        />
    )
}; 

export default ExpensesChart;