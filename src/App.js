import ToDo from "./Componenets/TODO";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text='Learn React'></ToDo> 
      <ToDo text='Master React'></ToDo> 
      <ToDo text='Explore the full React course'></ToDo> 
    </div>
  );
}

export default App;