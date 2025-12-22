function Modal() {
   return (
    <div className='modal'>
        <p>Are you sure?</p>
        
        {/*the btn btn--alt has its colour in in the index.css */}
        <button className='btn btn--alt'>Cancel</button>  
        <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
//this is the functionality of the button have to show in the App.js file