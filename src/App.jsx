import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CardList} from "./CardList.jsx";

let list = [
    {id:1,title:'apple',done:false},
    {id:2,title:'peach',done:false},
    {id:3,title:'milk',done:false},
]

function App() {

    return (
        <ul>
            <CardList list={list}/>
        </ul>
    )
}

export default App
