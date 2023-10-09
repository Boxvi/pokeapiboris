import React, {useEffect, useState} from "react";

export function Evoluciones({nombre}) {

    const URL = process.env.REACT_APP_APIURL + 'pokemon-species/' + nombre;
    const [evolucion, setEvolucion] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();

                const respose1 = await fetch(data.evolution_chain.url);
                const data1 = await respose1.json();

                setEvolucion(data1.chain);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, [URL]);

    function getEvolutions(evolution, level = 0) {
        if (!evolution) return [];
        let evolutions = [evolution.species.name];
        if (evolution.evolves_to.length > 0) {
            evolution.evolves_to.forEach(evo => evolutions.push(...getEvolutions(evo, level + 1)));
        }

        return evolutions;
    }


    return (
        <div>
            {/*<h1>{nombre}</h1>*/}
            {/*<h1>{JSON.stringify(evolucion)}</h1>*/}

            <div>
                <Evolucion evolucion={getEvolutions(evolucion, 0)}/>
            </div>

        </div>
    )
}

export function Evolucion({evolucion}) {

    const [pokemon, setPokemon] = useState([]);
    const [lastEvolucion1, setLastEvolucion1] = useState([]);

    const URL = process.env.REACT_APP_APIURL + 'pokemon/';


    useEffect(() => {

        if (evolucion.length === lastEvolucion1.length && evolucion.every((value, index) => value === lastEvolucion1[index])) {
            return;
        }
        setLastEvolucion1(evolucion);

        async function fetchData() {
            setPokemon([])
            for (let i = 0; i < evolucion.length; i++) {
                const response = await fetch(URL + evolucion[i]);
                const data = await response.json();
                setPokemon(prevPokemon => [...prevPokemon, data])
            }

        }

        fetchData().then(r => console.log(r)).catch(e => console.log(e));
    }, [URL, evolucion, lastEvolucion1]);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {pokemon.map((pokemon, index) => (
                    <div className='col' key={pokemon.name}>
                        <div className="card border-dark">
                            <div className="card-header text-center text-uppercase">{pokemon.name}</div>
                            <img
                                src={pokemon.sprites?.other["dream_world"].front_default || "../loading.gif"}
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">P: {pokemon.weight} Kg </p>
                                <p className="card-text">A: {pokemon.height} cm</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}
