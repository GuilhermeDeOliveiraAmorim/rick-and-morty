import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";

function App() {

    const startPaginator = [1, 2, 3, 4, 5];
    
    const [characters, setCharacters] = useState<[]>([]);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1);
    const [paginator, setPaginator] = useState<number[]>(startPaginator);
    
    const endPaginator = [count - 4, count - 3, count - 2, count - 1, count];

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/?page=" + page)
            .then((resposta) => {
                setCharacters(resposta.data["results"]);
            })
            .catch((erro) => {
                console.log(erro);
            });
        
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then((resposta) => {
                setCount(resposta.data["info"]["count"]);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, [page]);

    function handlePage(pageNumber: number) {
        
        setPage(pageNumber);

        console.log(pageNumber);

    }

    function handleNextPage(param: number) {

        
        
    }

    function handlePrevPage(param: number) {

        
        
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
                <button onClick={() => handlePage(1)}>Prev</button>
                <ul>
                    {paginator?.map((paginatorPage) => (
                        <li>
                            <button onClick={() => handlePage(paginatorPage)}>{paginatorPage}</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => handlePage(1)}>Next</button>
            </div>
        </>
    );
}

export default App;
