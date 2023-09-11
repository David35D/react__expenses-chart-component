import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.day}
                    label={dataPoint.day}
                    amount={dataPoint.amount}
                />
            ))}
        </div>
    );
};

export default Chart;