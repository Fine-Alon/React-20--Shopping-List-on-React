const getList = () => {
    let list = []

    if (localStorage.getItem('productList')) {
        console.log('Data is found:', JSON.parse(localStorage.getItem('productList')));
        JSON.parse(localStorage.getItem('productList')).map(product => {
            list.push(product)
        })
    } else {
        console.log('No data');
        list = [
            {id: crypto.randomUUID(), title: 'apple', done: false},
            {id: crypto.randomUUID(), title: 'peach', done: false},
            {id: crypto.randomUUID(), title: 'milk', done: false},
        ]
    }

    // return list.sort((item1, item2) => item1.title.toLowerCase().localeCompare(item2.title.toLowerCase()));
    return list.sort((item1, item2) => item1.title.toLowerCase() < item2.title.toLowerCase() ? -1 : 1);
}
export default getList
