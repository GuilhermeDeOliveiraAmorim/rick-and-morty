import './Info.css';

interface IProps {
    gender: string;
    name: string;
    species: string;
}

export default function Info(props: IProps) {

    const { gender, name, species } = props;

    return (
        <div className="Info">
            <p><b>Name</b>: {name}</p>
            <p><b>Gender</b>: {gender}</p>
            <p><b>Species</b>: {species}</p>
        </div>
    )
}