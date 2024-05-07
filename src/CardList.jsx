import Card from "./Card.jsx";

const CardList = ({list,changeFromList}) => {
    return <ul className='list'>
        {list.map(item => (
            <Card changeFromList={changeFromList} done={item.done}
                  key={item.id} id={item.id} title={item.title}/>
        ))}
    </ul>
}

export default CardList;
