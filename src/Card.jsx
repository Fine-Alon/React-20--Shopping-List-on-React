import Checkbox from "./Сheckbox.jsx";
import {useEffect, useRef, useState} from "react";
import addProductToLS from "./helpers/addProductToLS.js";

const Card = ({title, id, done, handleFromList}) => {
    const inputRef = useRef()
    const [productName, setProductName] = useState(title)
    const [isEditMode, setIsEditMode] = useState(false)
    const [isDone, setIsDone] = useState(done)

    const handleClickBtn = () => {
        setIsDone(!isDone)
        handleFromList(id, productName.trim(), isDone)
    }
    const handleDoubleClickBtn = () => {
        setIsEditMode(!isEditMode)
    }

    const handleBlurInput = (e) => {
        setIsEditMode(false)
        e.target.value.trim() !== ''
            ? addProductToLS(id, e.target.value.trim(), isDone)
            : handleFromList(id)
    }

    useEffect(() => {
        if (isEditMode && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditMode]);

    const handleInput = (e) => {
        setProductName(e.target.value)
    }

    return (
        <li key={id} className={isDone ? "card-clicked" : ''}>
            <button onClick={handleClickBtn} onDoubleClick={handleDoubleClickBtn}
                    className='btn_product'
            >

                <Checkbox checked={isDone} onChange={handleClickBtn}/>
                {isEditMode
                    ? <input ref={inputRef}
                             type="text"
                             onBlur={handleBlurInput}
                             value={productName}
                             onInput={handleInput}/>

                    : <span style={{textDecoration: isDone ? 'line-through' : 'none'}}>{productName}</span>
                }

            </button>
        </li>
    )
}
export default Card
