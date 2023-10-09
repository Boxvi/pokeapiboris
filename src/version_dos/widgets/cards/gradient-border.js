import {useEffect, useState} from "react";
import React from "react";
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography} from "@material-tailwind/react";
import {Evoluciones} from "../../pages/dashboard/evoluciones";
import axios from "axios";


export function GradientBorder({nombre}) {

    const URL = process.env.REACT_APP_APIURL + 'pokemon/' + nombre;

    const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setPokemon(data);


            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [URL]);


    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);


    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

            <img
                src={pokemon.sprites?.other["official-artwork"].front_default || "../loading.gif"}
                alt={nombre} className="h-80 w-72 object-cover rounded-t-xl"/>
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{nombre}</p>

                <div className="mt-2 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-box-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">PESO</p>

                            <p className="font-medium">{pokemon.weight} kg</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-rulers" viewBox="0 0 16 16">
                            <path
                                d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"/>
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">ALTURA</p>

                            <p className="font-medium">{pokemon.height} cm</p>
                        </div>
                    </div>

                </div>


                <h1 className="mt-2">Tipos: </h1>
                <div className="mt-2 flex flex-wrap gap-1">

                    {pokemon.types?.map((type) => (
                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                    {type.type.name}
                                </span>
                    ))}
                </div>

            </div>

            <div className={"mb-2"} style={{textAlign: "center"}}>
                <Button onClick={() => handleOpen("xxl")} variant="gradient">
                    SABER MAS
                </Button>

            </div>


            <Dialog
                open={
                    size === "xs" ||
                    size === "sm" ||
                    size === "md" ||
                    size === "lg" ||
                    size === "xl" ||
                    size === "xxl"
                }
                size={size || "md"}
                handler={handleOpen}
                style={{backgroundColor: "transparent"}} // Mover el estilo aquí

                BackdropProps={{style: {backgroundColor: "transparent"}}}
            >
                <DialogHeader className="uppercase">{nombre}</DialogHeader>
                <DialogBody divider>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <img
                                    src={pokemon.sprites?.other["dream_world"].front_default || "../loading.gif"}
                                    alt={nombre} className="aspect-square h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-success table-striped-columns">
                                        <tbody>
                                        <tr>
                                            <td className="font-bold capitalize text-gray-900 "> peso:</td>
                                            <td className="font-bold capitalize text-gray-900">{pokemon.weight} kg</td>
                                            <td className="font-bold capitalize text-gray-900"> altura</td>
                                            <td className="font-bold capitalize text-gray-900">{pokemon.height} cm</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <p className="capitalize font-bold text-gray-900">tipos:</p>
                                    <div className=" flex flex-wrap gap-1">
                                        {pokemon.types?.map((type) => (
                                            <span
                                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                                {type.type.name}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="capitalize font-bold mt-2 text-gray-900">habilidades:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {pokemon.abilities?.map((abilities) => (
                                            <span
                                                className="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-0.5 text-xs text-amber-600">
                                                {abilities.ability.name}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="capitalize font-bold mt-2 text-gray-900">movimientos</p>
                                    <div className="flex flex-wrap gap-1" style={{height: 180, overflowY: "scroll"}}>
                                        {pokemon.moves?.map((moves) => (
                                            <p
                                                className="whitespace-nowrap rounded-full bg-black px-2.5 py-0.5 text-xs text-white">
                                                {moves.move.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                    <Evoluciones nombre={nombre}/>

                            </div>
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>

        </div>

    )

}

//<Link to={`/version_dos/todos/${nombre}`} className="absolute inset-0 rounded-xl"/>
export default GradientBorder;

/*

<article
  class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    <time datetime="2022-10-10" class="block text-xs text-gray-500">
      10th Oct 2022
    </time>

    <a href="#">
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        How to center an element using JavaScript and jQuery
      </h3>
    </a>

    <div class="mt-4 flex flex-wrap gap-1">
      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        Snippet
      </span>

      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div>
  </div>
</article>
 */
