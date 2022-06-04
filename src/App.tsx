import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";
import Search from "./components/search";

function App() {
    
    const startPaginator = [1, 2, 3, 4, 5];
    
    const [characters, setCharacters] = useState<[]>([]);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1);
    const [paginator, setPaginator] = useState<number[]>(startPaginator);
    
    //const endPaginator = [count - 4, count - 3, count - 2, count - 1, count];

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
    }, [page, count]);

    function handlePage(pageNumber: number) {
        
        setPage(pageNumber);

        var paginationRule = [];

        if (pageNumber < 4) {

            paginationRule = startPaginator;
        
        } else {
            
            paginationRule = [pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2];

        }

        setPaginator(paginationRule);

    }

    return (
        <>
            <Search />
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
                <button onClick={() => handlePage(paginator[0] - 1)}>Previous</button>
                <ul>
                    {paginator?.map((paginatorPage) => (
                        <li>
                            <button onClick={() => handlePage(paginatorPage)}>{paginatorPage}</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => handlePage(paginator[4] + 1)}>Next</button>
            </div>
        </>
    );
}

export default App;
