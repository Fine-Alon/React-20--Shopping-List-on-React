const addProductToLS = (inputValue) => {

    let newList = JSON.parse(localStorage.getItem('productList')) || []

    const product = {id: crypto.randomUUID(), title: inputValue, done: false}

    newList.push(product)

    localStorage.setItem('productList', JSON.stringify(newList))

    return {newList, product}
}
export default addProductToLS
