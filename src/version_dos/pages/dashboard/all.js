import SimplePagination from "../../widgets/other/simple-pagination";
import React, {useEffect, useState} from "react";
import {IconButton, Typography} from "@material-tailwind/react";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
import GradientBorder from "../../widgets/cards/gradient-border";

export function All() {

    const [active, setActive] = useState(1);
    const [offset, setOffset] = useState(0);
    const limit = 20; // El número de elementos por página
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const data = await response.json();
            setData(data.results);
            setTotalItems(data.count);
        }

        fetchData();
    }, [offset]);


    const next = () => {
        if (active < Math.ceil(totalItems / limit)) {
            setActive(active + 1);
            setOffset(offset + limit);
        }
    };

    const prev = () => {
        if (active > 1) {
            setActive(active - 1);
            setOffset(offset - limit);
        }
    };

    return (
        <>

            <div className="flex items-center gap-8">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4"/>
                </IconButton>

                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{active}</strong> of{" "}
                    <strong className="text-gray-900">{Math.ceil(totalItems / limit)}</strong>
                </Typography>


                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    disabled={active === Math.ceil(totalItems / limit)}
                >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4"/>
                </IconButton>
            </div>


            <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {data.map((pokemon) => (
                    <GradientBorder nombre={pokemon.name}/>
                ))}
            </section>

            <div className="flex items-center gap-8">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4"/>
                </IconButton>

                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{active}</strong> of{" "}
                    <strong className="text-gray-900">{Math.ceil(totalItems / limit)}</strong>
                </Typography>


                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    disabled={active === Math.ceil(totalItems / limit)}
                >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4"/>
                </IconButton>
            </div>

        </>

    );

}

export default All;
