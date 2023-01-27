import React, {useEffect, useState} from 'react';
import axios from "axios";

const Detalle = (numero) => {

    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        async function fetchData() {
            // console.log(numero)
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + numero.data.id);
            setPokemon(response.data);
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
/*
      const data = await response.json();
            const resChain = await fetch(data.species.url);
            const dataChain = await resChain.json();
            const resEvo = await fetch(dataChain.evolution_chain.url);
            const dataEvo = await resEvo.json();

            setEvolutions(dataEvo.chain);
            <ul className="list-group">Evoluciones
                        {
                            evolutions.map((evo) => {
                                return (
                                    <>
                                        <li className="list-group-item"> {evo.species.name}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
 */