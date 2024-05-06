import {useState} from "react";
import addProductToLS from "../addProductToLS.js";

function useAddItemForm() {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const submitBtn = (e) => {
        e.preventDefault()

        addProductToLS(inputValue)

        setInputValue("");
        console.log('was submit')
    }

    return [inputValue, onInputChange, submitBtn]
}

export default useAddItemForm
