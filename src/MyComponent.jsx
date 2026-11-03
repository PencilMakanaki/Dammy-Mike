import {useState} from "react";

function MyComponent(){

    const [name, setName] = useState();

    return(
        <div>
           <p>Name: {name}</p>
           <button onClick={() => setName("Name")}>Set name</button>
        </div>
    )
}
export default MyComponent