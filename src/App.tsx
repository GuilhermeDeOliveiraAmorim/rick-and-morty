import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";

function App() {
    const [characters, setCharacters] = useState<[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/?page=" + page)
            .then((resposta) => {
                setCharacters(resposta.data["results"]);
                console.log(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, [page]);

    function handlePage(pageNumber: number) {
        setPage(pageNumber);
    }

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
            <div className="Paginator">
                <ul>
                    <li>
                        <button onClick={() => handlePage(1)}>1</button>
                    </li>
                    <li>
                        <button onClick={() => handlePage(2)}>2</button>
                    </li>
                    <li>
                        <button onClick={() => handlePage(3)}>3</button>
                    </li>
                    <li>
                        <button onClick={() => handlePage(4)}>4</button>
                    </li>
                    <li>
                        <button onClick={() => handlePage(5)}>5</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default App;
