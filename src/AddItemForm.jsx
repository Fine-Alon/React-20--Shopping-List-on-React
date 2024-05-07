import React, {useState} from "react";
import useAddItemForm from "./helpers/hooks/useAddItemForm.jsx";

const AddItemForm = ({addItemToList}) => {
    const [inputValue,isInputVisible, onInputChange, submitBtn] = useAddItemForm(addItemToList)

    return <form>
        {isInputVisible
            ? <input style={{width: '80%', borderRadius: '5px', padding: '5px', marginBottom: '5px'}}
                     value={inputValue}
                     onChange={onInputChange}
                     type="text"/>
            : null
        }

        <button
            className='add_btn'
            onClick={submitBtn}
            type={isInputVisible ? "submit" : "button"}>

            Add new product
        </button>
    </form>
}
export default AddItemForm
