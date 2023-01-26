
import { useState } from 'react';
import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisiable] = useState(false);

    const saveCostDataHandler = (inputData) => {
        const costData = {
            ...inputData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);
        setIsFormVisiable(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisiable(true);
    }

    const cancelCostDataHandler = () => {
        setIsFormVisiable(false)
    }

    return (
        <div className='new-cost' >
            {isFormVisible ? 
                    <CostForm onCancel={cancelCostDataHandler} onSaveCostData={saveCostDataHandler} /> :
                    <button onClick={inputCostDataHandler} >New Cost</button>}            
        </div>
    )
}

export default NewCost;