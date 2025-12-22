function ToDo(props){
    return (
    <div className='card'>
        <h2>{props.text}</h2>   {/* here we are referencing the the text from each of the different blocks in the app.js file. Putting just props.text will output just that, however having it in the {} will allow for it to pick up the reference and put only the variable assigned to it */}
        <div className='actions'>
          <button className='btn'>Delete</button>
        </div>
      </div>
    );
}
export default ToDo;