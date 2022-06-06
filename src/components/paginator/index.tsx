import axios from "axios";
import { useEffect, useState } from "react";

interface IProps {
    page: number;
}

export default function Paginator(props: IProps) {

    const startPaginator = [1, 2, 3, 4, 5];

    const [page, setPage] = useState<number>(1);
    const [paginator, setPaginator] = useState<number[]>(startPaginator);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then((resposta) => {
                setCount(resposta.data["info"]["count"]);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, [count]);

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
    )
}