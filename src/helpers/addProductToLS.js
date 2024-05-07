const addProductToLS = (itemID = null, itemValue = null) => {

    let newList = JSON.parse(localStorage.getItem('productList')) || []

    if (itemID !== null && itemValue !== null) {
        newList = newList.map(item => ({
            ...item,
            title: item.id === itemID ? itemValue : item.title
            // item.id === itemID ? item.title = itemValue : null
        }))
    } else if (itemID !== null && itemValue === null) {

        // Удаление элемента из списка по его ID
        newList = newList.filter(item => item.id !== itemID);
    } else {
        // Добавление нового элемента в список
        const product = {id: crypto.randomUUID(), title: itemValue, done: false};
        newList.push(product);
    }

    newList.sort((item1, item2) => item1.title.toLowerCase() < item2.title.toLowerCase() ? -1 : 1)

    localStorage.setItem('productList', JSON.stringify(newList))

    return newList
}
export default addProductToLS
