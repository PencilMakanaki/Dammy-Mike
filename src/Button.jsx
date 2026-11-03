

// function Button() {

//   const handleClick = () => 
//     console.log("Button clicked!");
    
//     return (
//         <button className="button" onClick={handleClick}>
//           Click Me 😁
//         </button>   
//     );
//   }
function Button() {
     
    const handleClick = (e) => e.target.textContent ="OUCH!😬";
    return (
        <button onDoubleClick={(e)=> handleClick(e)}>click me</button>
    );
}

export default Button;