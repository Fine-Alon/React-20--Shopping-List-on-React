import {useState} from "react";
import addProductToLS from "../addProductToLS.js";

function useAddItemForm(addItemToList) {
    const [inputValue, setInputValue] = useState('')
    const [isInputVisible, setIsInputVisible] = useState(false)

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const submitBtn = (e) => {
        e.preventDefault()
        if (!isInputVisible) {
            setIsInputVisible(true);
            return;
        }
        if (!inputValue.trim()) {
            setIsInputVisible(false)
            return
        }

        addProductToLS(null, inputValue)
        addItemToList(inputValue); // add item to list DOM
        setInputValue("");
        setIsInputVisible(false)
    }

    return [inputValue, isInputVisible, onInputChange, submitBtn]
}

export default useAddItemForm
