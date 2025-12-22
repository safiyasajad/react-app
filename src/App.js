import Modal from "./Componenets/Modal";
import ToDo from "./Componenets/TODO";
import Backdrop from "./Componenets/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text='Learn React'></ToDo> 
      <ToDo text='Master React'></ToDo> 
      <ToDo text='Explore the full React course'></ToDo> 
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;