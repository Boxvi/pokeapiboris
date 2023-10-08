import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, List, Typography} from "@material-tailwind/react";
import GradientBorder from "../../widgets/cards/gradient-border";


export function Tipos() {

    const name = useParams();
    const valor = name["*"]
    const URL = process.env.REACT_APP_APIURL + 'type/' + valor;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setData(data.pokemon);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [URL]);

    return (
        <section
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {data && data.map((pokemon) => (
                <GradientBorder nombre={pokemon.pokemon.name}/>
            ))}
        </section>


    );
}

export default Tipos;
