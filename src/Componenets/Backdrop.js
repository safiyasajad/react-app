//backdrop of the delete button when clicked
function Backdrop(props) {
    
    return <div className="backdrop" onClick={props.onClickBacground}/> //no content between therefore we can write it this way instead of <div></div>
}                                    //here naming the onClickBackgorund is variable name...can be anything has to be consistent with the code in the TODO.js of line         
                                    // {modalIsOpen && <Backdrop onClickBacground={closeModalHandler}/>}
 

export default Backdrop;
 
//this is the functionality of the backgroud. have to show in the App.js file