function ToDo(props){
    function deleteHandler(){ //function to handle the listining of the 'delete' button being clicked
    console.log('Clicked!'); //allows us to know that the fucntionality works (no output)
    console.log(props.text); //will tell us which of the continers has been clicked


    }
    return (
    <div className='card'>
        <h2>{props.text}</h2>   {/* here we are referencing the the text from each of the different blocks in the app.js file. Putting just props.text will output just that, however having it in the {} will allow for it to pick up the reference and put only the variable assigned to it */}
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button> {/*here we will not give a parameter to the deleteHander function as that fucntion will run the parameter as well at the beginneing even when not called  */}
        </div>
      </div>
    );
}
export default ToDo;