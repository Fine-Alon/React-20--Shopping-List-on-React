import './App.css'
import CardList from "./CardList.jsx";
import getList from "./helpers/getList.js";
import AddItemForm from "./AddItemForm.jsx";
import {useState} from "react";

// let list = getList()

function App() {
    const [list, setList] = useState(getList())

    const addItemToList = (newList) => {
        setList(newList);
    };

    return <div className='container'>
        <h1 style={{color: 'black'}}>Shopping list</h1>

        <CardList list={list}/>
        <AddItemForm addItemToList={addItemToList}/>
    </div>
}

export default App
