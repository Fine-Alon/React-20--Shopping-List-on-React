import Card from "./Card.jsx";

const CardList = ({list, changeItemInList, deleteItemFromList}) => {
    return <ul className='list'>
        {list.map(item => (
            <Card deleteItemFromList={deleteItemFromList} done={item.done}
                  key={item.id} id={item.id} title={item.title} changeItemInList={changeItemInList}/>
        ))}
    </ul>
}

export default CardList;
