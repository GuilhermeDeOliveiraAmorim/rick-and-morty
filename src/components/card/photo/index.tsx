import "./Photo.css";

interface IProps {
    image: string;
    name: string;
}

export default function Photo(props: IProps) {

    const { image, name } = props;

    return (
        <div>
            <img src={image} alt={name} className="Photo" />
        </div>
    )
}