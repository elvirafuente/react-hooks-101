import React, {useState} from 'react';

const BasicCounter = () => {

    const [ counter, setCounter ] = useState(0);
       
    return ( 
        <div>
            <h2 className="title">Welcome to the counter of life</h2>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Add (+)</button>
            <button onClick={() => setCounter(counter - 1)}>Subtract (-)</button>

        </div>
    );
}

export default BasicCounter; 