import Card from "./Card.jsx";
import Button from "./Button.jsx";

const CardList = ({list}) => {

    return <div className='container'>
        <h1 style={{color: 'black'}}>Shopping list</h1>

        <ul className='list'>
            {list.map(item => (
                <Card done={item.done} key={item.id} title={item.title}/>
            ))}
        </ul>

        <Button />
    </div>
}

export default CardList;
