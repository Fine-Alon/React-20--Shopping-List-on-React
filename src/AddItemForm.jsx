import React from "react";
import useAddItemForm from "./helpers/hooks/useAddItemForm.jsx";

const AddItemForm = ({ addItemToList }) => {
    const [inputValue, onInputChange, submitBtn] = useAddItemForm(addItemToList)

    return <form>
        <input style={{width: '80%', borderRadius: '5px', padding: '5px', marginBottom: '5px'}}
               value={inputValue}
               onChange={onInputChange}
               type="text"/>

        <button
            className='add_btn'
            onClick={submitBtn}
            type="submit">

            Add new product
        </button>
    </form>
}
export default AddItemForm
