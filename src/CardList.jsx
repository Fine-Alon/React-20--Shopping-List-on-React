import Card from "./Card.jsx";

const CardList = ({list, handleFromList}) => {
    return <ul className='list'>
        {list.map(item => (
            <Card handleFromList={handleFromList} done={item.done}
                  key={item.id} id={item.id} title={item.title}/>
        ))}
    </ul>
}

export default CardList;
