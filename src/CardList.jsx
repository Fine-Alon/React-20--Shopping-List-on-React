import Card from "./Card.jsx";

const CardList = ({list, changeItemInList}) => {
    return <ul className='list'>
        {list.map(item => (
            <Card done={item.done} key={item.id} title={item.title} changeItemInList={changeItemInList}/>
        ))}
    </ul>
}

export default CardList;
