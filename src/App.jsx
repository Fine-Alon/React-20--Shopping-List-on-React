import './App.css'
import CardList from "./CardList.jsx";
import getList from "./helpers/getList.js";
import AddItemForm from "./AddItemForm.jsx";
import {useState} from "react";
import addProductToLS from "./helpers/addProductToLS.js";

function App() {
    const [list, setList] = useState(getList())

    const handleFromList = (id = null, value = null) => {
        const newList = addProductToLS(id, value)
        console.log(newList)
        setList(newList);
    }

    return <div className='container'>
        <h1 style={{color: 'black'}}>Shopping list</h1>

        <CardList list={list} changeFromList={handleFromList}/>
        <AddItemForm addItemToList={handleFromList}/>
    </div>
}

export default App
