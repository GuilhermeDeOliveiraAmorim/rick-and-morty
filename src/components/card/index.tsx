import Info from "./info";
import Photo from "./photo";

import "./Card.css";

interface IProps {
    id: number;
    gender: string;
    name: string;
    species: string;
    image: string;
}

export default function Card(props: IProps) {

    const { id, gender, name, species, image } = props;

    return (
        <div key={id} className="Card" onClick={() => console.log(id)}>
            <Photo image={image} name={name} />
            <Info gender={gender} name={name} species={species} />
        </div>
    )
}