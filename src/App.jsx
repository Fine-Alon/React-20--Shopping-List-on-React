import './App.css'
import CardList from "./CardList.jsx";

let list = []

if (localStorage.getItem('productList')) {
    console.log('Данные найдены:', localStorage.getItem('productList'));
    localStorage.getItem('productList').map(product => {
        list.push(product)
    })
} else {
    console.log('Данные не найдены');
    list = [
        {id: 1, title: 'apple', done: false},
        {id: 2, title: 'peach', done: false},
        {id: 3, title: 'milk', done: false},
    ]
}


function App() {

    return (
        <CardList list={list}/>
    )
}

export default App
