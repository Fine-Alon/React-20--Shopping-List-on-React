import {Card} from "./Card.jsx";

export const CardList = ({list}) => {

    return <div style={{background: 'white'}}>
        <h1 style={{color: 'black'}}>Shopping list</h1>

        {list.map(item => (
            <Card done={item.done} key={item.id} title={item.title}/>
        ))}

    </div>
}
