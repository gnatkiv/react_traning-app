import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2023, 1, 25),
      description: "Frig",
      amount: '$300'
    },
    {
      date: new Date(2023, 1, 25),
      description: "Mac",
      amount: '$600'
    },
    {
      date: new Date(2023, 1, 25),
      description: "TV",
      amount: '$800'
    },
  ]

  return (
    <div>
        <h1>Hello World</h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
