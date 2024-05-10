import {useState} from "react";
import getList from "../getList.js";
import addProductToLS from "../addProductToLS.js";

function useHandleApp() {
    const [list, setList] = useState(getList())

    const handleFromList = (id = null, value = null, done = null) => {
        console.log(done)
        const newList = addProductToLS(id, value, done)
        setList(newList);
    }

    return [list, handleFromList]
}

export default useHandleApp
