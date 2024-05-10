import React, {useRef} from "react";
import useAddItemForm from "./helpers/hooks/useAddItemForm.jsx";

const AddItemForm = ({addItemToList, tabIndex}) => {
    const [inputValue, isInputVisible,
        onInputChange, submitBtn, inputRef] = useAddItemForm(addItemToList)

    return <form>
        {isInputVisible
            ? <input style={{width: '80%', borderRadius: '5px', padding: '5px', marginBottom: '5px'}}
                     value={inputValue}
                     onChange={onInputChange}
                     type="text"
                     ref={inputRef}
            />
            : null
        }

        <button
            className='add_btn'
            tabIndex={tabIndex}
            onClick={submitBtn}
            type={isInputVisible ? "submit" : "button"}
        >
            Add new product
        </button>
    </form>
}
export default AddItemForm
