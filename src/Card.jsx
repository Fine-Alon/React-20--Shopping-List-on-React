import Checkbox from "./Сheckbox.jsx";
import {useEffect, useRef, useState} from "react";
import addProductToLS from "./helpers/addProductToLS.js";

const Card = ({title, id, done, changeFromList}) => {
    const inputRef = useRef()
    const [productName, setProductName] = useState(title)
    const [isRedactTitleOpen, setIsRedactTitleOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleClickBtn = () => {
        setIsClicked(!isClicked)
    }
    const handleDoubleClickBtn = () => {
        setIsRedactTitleOpen(!isRedactTitleOpen)
    }

    const handleBlurInput = (e) => {
        setIsRedactTitleOpen(false)
        e.target.value.trim() !== ''
            ? addProductToLS(id, e.target.value.trim())
            : changeFromList(id, null)
    }

    useEffect(() => {
        if (isRedactTitleOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isRedactTitleOpen]);

    const handleInput = (e) => {
        setProductName(e.target.value)
    }

    return (
        <li key={id} className={isClicked ? "card-clicked" : ''}>
            <button onClick={handleClickBtn} onDoubleClick={handleDoubleClickBtn}
                    className='btn_product'
            >

                <Checkbox checked={isClicked} onChange={handleClickBtn}/>
                {isRedactTitleOpen
                    ? <input ref={inputRef}
                             type="text"
                             onBlur={handleBlurInput}
                             value={productName}
                             onInput={handleInput}/>

                    : <span style={{textDecoration: isClicked ? 'line-through' : 'none'}}>{productName}</span>
                }

            </button>
        </li>
    )
}
export default Card
