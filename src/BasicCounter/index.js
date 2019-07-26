import React, {useState} from 'react';

const BasicCounter = () => {
    
    
    /////////////////////    // ////inline functions
    // const [ counter, setCounter ] = useState(0);
       
    // return ( 
    //     <div>
    //         <h2 className="title">Welcome to the counter of life</h2>
    //         <p>{counter}</p>
    //         <button onClick={() => setCounter(counter + 1)}>Add (+)</button>
    //         <button onClick={() => setCounter(counter - 1)}>Subtract (-)</button>
    //     </div>
    // );

    const [ counter, setCounter ] = useState(0);

    const handleClick = (event) => {
        const {id} = event.target;
        if( id === "add"){
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)

        }
    }
       
    return ( 
        <div>
            <h2 className="title">Welcome to the counter of life</h2>
            <p>{counter}</p>
            <button onClick={handleClick} id="add">Add (+)</button>
            <button onClick={handleClick} id="sub">Subtract (-)</button>
        </div>
    );


}

export default BasicCounter; 