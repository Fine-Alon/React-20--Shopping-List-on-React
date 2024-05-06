import {useState} from "react";
import addProductToLS from "../addProductToLS.js";

function useAddItemForm(addItemToList) {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const submitBtn = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return;

        const {newList} = addProductToLS(inputValue)
        addItemToList(newList); // add item to list

        setInputValue("");
        console.log('was submit')
    }

    return [inputValue, onInputChange, submitBtn]
}

export default useAddItemForm
