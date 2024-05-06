import Checkbox from "./Сheckbox.jsx";
import {useRef, useState} from "react";

const Card = ({title, id, done}) => {
    const liRef = useRef()

    const [isClicked, setIsClicked] = useState(false)
    const handleClickBtn = () => {
        setIsClicked(!isClicked)
    }
    const handleDoubleClickBtn = () => {

    }

    return (
        <li key={id} ref={liRef} className={isClicked ? "card-clicked" : ''}>
            <button onClick={handleClickBtn} onDoubleClick={handleDoubleClickBtn}
                    className='btn_product'
            >

                <Checkbox checked={isClicked} onChange={handleClickBtn}/>
                {title}
            </button>
        </li>
    )
}
export default Card
