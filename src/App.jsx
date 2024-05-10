import './App.css'
import CardList from "./CardList.jsx";
import AddItemForm from "./AddItemForm.jsx";
import useHandleApp from "./helpers/hooks/useHandleApp.jsx";

function App() {
    const [list, handleFromList] = useHandleApp()

    return <div className='container'>
        <h1 style={{color: 'black'}}>Shopping list</h1>

        <CardList list={list} handleFromList={handleFromList}/>
        <AddItemForm addItemToList={handleFromList} tabIndex={list.length + 1}/>
    </div>
}

export default App
