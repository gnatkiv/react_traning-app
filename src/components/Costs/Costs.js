import CostsFilter from "../NewCost/CostsFilter";
import Card from "../UI/Card";
import { useState } from "react";

import './Costs.css';
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = (props) => {

    const [inputFilter, setInputFilter] = useState('2022');

    const changeYearHandler = (value) => {
        setInputFilter(value);
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === inputFilter;
    })
 
    return (
        <div>
            <Card className='costs' >
                <CostsFilter 
                        year={inputFilter} 
                        onChangeYear={changeYearHandler}
                />
                <CostDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
        </Card>
      </div>
    )
}

export default Costs;