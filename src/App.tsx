import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";

import "./App.css";

function App() {
    const [characters, setCharacters] = useState<[]>([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then((resposta) => {
                setCharacters(resposta.data['results']);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    return (
        <div className="App">
            {characters?.map((item) => (
                <Card key={item['id']} id={item['id']} gender={item['gender']} name={item['name']} species={item['species']} image={item['image']} />
            ))}
        </div>
    );
}

export default App;
