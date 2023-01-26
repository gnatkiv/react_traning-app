
import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 1, 25),
    description: "Frig",
    amount: '$300'
  },
  {
    id: 'c2',
    date: new Date(2023, 1, 25),
    description: "Mac",
    amount: '$600'
  },
  {
    id: 'c3',
    date: new Date(2022, 1, 25),
    description: "TV",
    amount: '$800'
  },
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    });
  }



  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
