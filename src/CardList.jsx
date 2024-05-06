import Card from "./Card.jsx";

const CardList = ({list}) => {
    return <ul className='list'>
        {list.map(item => (
            <Card done={item.done} key={item.id} title={item.title}/>
        ))}
    </ul>
}

export default CardList;
