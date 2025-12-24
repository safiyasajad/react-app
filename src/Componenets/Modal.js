function Modal(props) {
   
//    function cancelHandler(){
//     props.onCancel();
//    }

   function confirmHandler() {
    props.onConfirm();
   }

    return (
    <div className='modal'>
        <p>Are you sure?</p>
        
        {/*the btn btn--alt has its colour in in the index.css */}
        {/* <button className='btn btn--alt' onClick={cancelHandler}>Cancel </button>    */}
        {/* can also be, in that case we don't need a fucntion wrapper  */}
        <button className='btn btn--alt' onClick={props.onCancel}>Cancel </button>   


        {/* here we have to use the onClick as the handler as 'button' is a built in functionality */}
        <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
//this is the functionality of the button have to show in the App.js file