//state of the continer when the cancel or confirm button is clicked
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function ToDo(props){
    const [modalIsOpen, setModalIsOpen] = useState(); //this is where we are setting that the pop box is open or closed, currently it is set to closed as initally its closed
    function deleteHandler(){ //function to handle the listining of the 'delete' button being clicked
    // console.log('Clicked!'); //allows us to know that the fucntionality works (no output)
    // console.log(props.text); //will tell us which of the continers has been clicked
        setModalIsOpen(true); //here we are seeing that when the 'Delete' button is clicked, the popbox is set to open, therefore setModalIsOpen(true) is set to true.
        //here we will add the modal.js and backdrop.js and it is specific to this funcitonality only.
    
    }
    return (
    <div className='card'>
        <h2>{props.text}</h2>   {/* here we are referencing the the text from each of the different blocks in the app.js file. Putting just props.text will output just that, however having it in the {} will allow for it to pick up the reference and put only the variable assigned to it */}
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button> {/*here we will not give a parameter to the deleteHander function as that fucntion will run the parameter as well at the beginneing even when not called  */}
        </div>
        {/* if modalIsOpen is true then modal else NUL */}
        {modalIsOpen ? <Modal/>: null}
        {modalIsOpen ? <Backdrop/> : null}

      </div>
    );
}
export default ToDo;