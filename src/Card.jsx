import Checkbox from "./Сheckbox.jsx";

const Card = ({title, id, done}) => {


    return (
        <li key={id}>
            <Checkbox/>
            {title}
        </li>
    )
}
export default Card
