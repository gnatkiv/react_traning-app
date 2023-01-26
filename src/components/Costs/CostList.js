import CostItem from "./CostItem";
import './CostList.css';

const CostList = (props) => {

    if (props.costs.length === 0) {
        return <h2 className="ost-list__fallback">Nothink</h2>
    }
    
    return (
        <ul className="cost-list">
            {props.costs.map((cost, i) => (
            <CostItem 
                    date={cost.date}
                    key={i}
                    description={cost.description} 
                    amount={cost.amount} 
            />))}
        </ul>
    )
}

export default CostList;