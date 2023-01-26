
import DiabramBar from './DiabramBar';
import './Diagram.css';

const Diagram = (props) => {

    const dataSetsValue = props.dataSets.map(dataSet => {
        return dataSet.value;
    })

    const maxMonthCosts = Math.max(...dataSetsValue);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => {
                return <DiabramBar 
                        key={dataSet.label}
                        value={dataSet.value}
                        maxValue={maxMonthCosts}
                        label={dataSet.label}
                />
            })}
        </div>
    )
}

export default Diagram;