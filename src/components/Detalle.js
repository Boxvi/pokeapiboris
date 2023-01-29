import React, {useEffect, useState} from 'react';
import axios from "axios";
import Evoluciones from "./Evoluciones";

const Detalle = (numero) => {

    const [pokemon, setPokemon] = useState(null);
    const [evolucion, setEvolucion] = useState(null);


    useEffect(() => {
        async function fetchData() {
            // console.log(numero)
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + numero.data.id);
            setPokemon(response.data);

            const response1 = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + numero.data.id);

            const response2 = await axios.get(response1.data.evolution_chain.url);
            setEvolucion(response2.data.chain)

        }

        fetchData().then(r => console.log(r)).catch(e => console.log(e));
    }, [numero]);


    if (!pokemon) {
        return (
            <>
                <div className="card border-dark">
                    <div className="col">
                        <div className={"card-header text-center text-uppercase"}><h3>Presione un boton</h3></div>
                    </div>

                    <div className="card-body">
                        <p className="card-text">Peso: Esperando a su eleccion</p>
                        <p className="card-text">Altura: Esperando a su eleccion</p>

                        <ul className="list-group">Tipo(s)

                            <li className="list-group-item">Esperando a su eleccion</li>
                        </ul>

                        <br/>

                        <ul className="list-group">Evolucion(es)>
                            <li className="list-group-item">Esperando a su eleccion</li>
                        </ul>

                        <br/>
                        <ul className="list-group">Habilidad(es)

                            <li className="list-group-item">Esperando a su eleccion</li>

                        </ul>

                        <br/>
                        <ul className="list-group">Movimiento(s)

                            <li className="list-group-item">Esperando a su eleccion</li>
                        </ul>

                    </div>
                </div>
            </>
        );
    }

    function getEvolutions(evolution, level = 0) {
        if (!evolution) return [];
        let evolutions = [evolution.species.name];
        if (evolution.evolves_to.length > 0) {
            evolution.evolves_to.forEach(evo => evolutions.push(...getEvolutions(evo, level + 1)));
        }

        return evolutions;
    }

    return (

        <div className="col">
            <div className="card border-dark">
                <div className={"card-header text-center text-uppercase"}><h3>{pokemon.name}</h3></div>
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemon.id + ".svg"}
                    alt="..."/>


                <div className="card-body">
                    <p className="card-text">Peso: {pokemon.weight} Kg </p>
                    <p className="card-text">Altura: {pokemon.height} cm</p>

                    <ul className="list-group">Tipo(s)
                        {
                            pokemon.types.map((tipo) => {
                                return (
                                    <>
                                        <li className="list-group-item"> {tipo.type.name}</li>

                                    </>
                                )
                            })
                        }</ul>

                    <br/>

                    <ul className="list-group">Evolucion(es)</ul>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            <Evoluciones evolucion1={getEvolutions(evolucion, 0)}/>
                        }
                    </div>

                    <br/>
                    <ul className="list-group">Habilidad(es)
                        {
                            pokemon.abilities.map((habilidad) => {
                                return (
                                    <>
                                        <li className="list-group-item"> {habilidad.ability.name}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <br/>

                    <ul className="list-group">Movimiento(s)
                        {
                            pokemon.moves.map((movimiento) => {
                                return (
                                    <>
                                        <li className="list-group-item">{movimiento.move.name}</li>
                                    </>
                                )
                            })
                        }
                    </ul>


                </div>
            </div>
        </div>
    )
}
export default Detalle;