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

    console.log(data);

    return (
        <section
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {data && data.map((pokemon) => (
                <GradientBorder nombre={pokemon.pokemon.name}/>
            ))}
        </section>


    );
}

// export function TiposWrapper({name, url}) {
//     // Usa Suspense para manejar la operación asincrónica
//     const data = fetchData(url);
//
//     const datas = data.read().pokemon;
//
//     console.log(datas);
//
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Tipos name={name} url={url}/>
//         </Suspense>
//     );
// }

// <div className="h-52 rounded-lg bg-gray-200">
//
//     <GradientBorder nombre={pokemon.pokemon.name}
//                     imagen={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"}/>
//
// </div>

export default Tipos;
/*

export function Tipos({name, url}) {

    const API = fetchData(url);

    let data;

    startTransition(() => {
        data = API.read().pokemon;
    });

    console.log(data);


    return (
        <div>
            <h1>POKEMONES DE TIPO</h1>
            <h2>{name}</h2>
            <h2>{url}</h2>

        </div>
    )
}
            {/*<h2>{url}</h2>*/

/*
{data.map(({previous, results}) => (
                            results.map(({name, url}) => (
                                <Route exact path={name} element={<Types name={name} url={url}/>}/>
                            ))
                        )
                    )}
 */


// Llama a fetchData dentro de startTransition
// const API = startTransition(() => fetchData(url));
//
// // Define una variable para los datos
// let data = null;
//
// // Utiliza un bloque try-catch para manejar posibles errores de lectura
// try {
//     data = API.read().pokemon;
// } catch (error) {
//     // Maneja el error de lectura aquí, por ejemplo, mostrando un mensaje de error
//     console.error('Error al leer datos:', error);
// }
//


/*
<Card key={pokemon.pokemon.name} color="transparent" shadow={false}>
                    <CardHeader
                        floated={false}
                        color="gray"
                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                        <img
                            src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"}
                            alt={pokemon.pokemon.name}
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                        <Typography
                            variant="small"
                            className="font-normal text-blue-gray-500"
                        >
                            tag
                        </Typography>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mt-1 mb-2"
                        >
                            {pokemon.pokemon.name}
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal text-blue-gray-500"
                        >
                            description
                        </Typography>
                    </CardBody>

                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                        <Link>
                            <Button variant="outlined" size="sm">
                                MAS DETALLES
                            </Button>
                        </Link>
                    </CardFooter>


                </Card>
 */
