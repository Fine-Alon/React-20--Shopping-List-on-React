import Checkbox from "./Сheckbox.jsx";
import useHandleCard from "./helpers/hooks/useHandleCard.jsx";

const Card = ({title, id, done, handleFromList, tabIndex}) => {

    const [handleKeyPress, handleClickBtn, handleDoubleClickBtn,
        handleBlurInput, handleInput, isDone,
        isEditMode, productName, inputRef] = useHandleCard(title, id, done, handleFromList)


    return (
        <li key={id} className={isDone ? "card-clicked" : ''}>
            <button onClick={handleClickBtn}
                    className='btn_product'
                    style={{zIndex: 1}}
                    tabIndex={tabIndex}
                    onKeyDown={handleKeyPress}
            >

                <Checkbox
                    checked={isDone}
                    onChange={handleClickBtn}/>
                {isEditMode
                    ? <input ref={inputRef}
                             type="text"
                             tabIndex={-1}
                             onBlur={handleBlurInput}
                             value={productName}
                             onInput={handleInput}/>

                    : <span style={{
                        textDecoration: isDone ? 'line-through' : 'none',
                        zIndex: 10
                    }}
                            onDoubleClick={handleDoubleClickBtn}>{productName}</span>
                }

            </button>
        </li>
    )
}
export default Card
