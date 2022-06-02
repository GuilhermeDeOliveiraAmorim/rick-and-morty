import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";

import "./App.css";
import Paginator from "./components/paginator";

function App() {
    const [characters, setCharacters] = useState<[]>([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/?page=3")
            .then((resposta) => {
                setCharacters(resposta.data["results"]);
                console.log(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    return (
        <>
            <div className="App">
                {characters?.map((item) => (
                    <Card
                        key={item["id"]}
                        id={item["id"]}
                        gender={item["gender"]}
                        name={item["name"]}
                        species={item["species"]}
                        image={item["image"]}
                    />
                ))}
            </div>
            <Paginator />
        </>
    );
}

export default App;
