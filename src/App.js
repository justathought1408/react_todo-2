import {useState} from 'react';
import {Form} from './Form.js';
import {Arr} from './Arr.js'
import './App.css';



function App() {
    const [array, setArray] = useState([]);
    const [count, setCount] = useState(0);
    const [compCount, setCompCount] = useState(0);
    const deleteHandler = index => setArray(array.filter((item, idx) => idx !== index))
    return (
        <div className="App">
            <Form array={array} setArray={setArray} count={count} setCount={setCount}/>
            <Arr array={array} deleteHandler={deleteHandler} count={count} setCount={setCount} compCount={compCount} setCompCount={setCompCount}/>
            <p className={array.length ? "completed_counter" : "completed_counter-hidden"}
                >{compCount} completed ToDo's!</p>
            <p className={array.length?"n":"y"}>Todo List is Empty</p>
            <p className="counter">{count} ToDo's!</p>
            <button array={array} style={{cursor: 'pointer'}} onClick={() => {
                setArray([])
                setCount(0)
                setCompCount(0)
            }}>Reset</button>
        </div>
    );
}

export default App;
