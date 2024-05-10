import {useEffect, useRef, useState} from "react";
import addProductToLS from "../addProductToLS.js";

function useHandleCard(title, id, done, handleFromList) {
    const inputRef = useRef()
    const [productName, setProductName] = useState(title)
    const [isEditMode, setIsEditMode] = useState(false)
    const [isDone, setIsDone] = useState(done)

    const handleClickBtn = () => {
        setIsDone(!isDone)
        handleFromList(id, productName.trim(), isDone)
    }
    const handleDoubleClickBtn = (e) => {
        setIsEditMode(!isEditMode)
    }

    const handleBlurInput = (e) => {
        setIsEditMode(false)
        if (e.target.value.trim() !== '') {
            addProductToLS(id, e.target.value.trim(), !isDone)
        } else {
            handleFromList(id)
        }
    }

    const handleKeyPress = (e) => {
        console.log(e.key)
        if (e.key === "Enter") {
            e.preventDefault()
            handleClickBtn()
        }
        if (e.key === " ") {
            e.preventDefault()
            handleDoubleClickBtn(e)
        }
    };


    const handleInput = (e) => {
        setProductName(e.target.value)
    }

    useEffect(() => {
        if (isEditMode && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditMode])

    return [handleKeyPress,handleClickBtn, handleDoubleClickBtn,
        handleBlurInput, handleInput, isDone,
        isEditMode, productName, inputRef, setIsDone]
}

export default useHandleCard
