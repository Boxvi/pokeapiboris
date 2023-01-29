import React, {useEffect, useState} from 'react';
import axios from "axios";

const Evoluciones = ({evolucion1}) => {

    const [pokemon, setPokemon] = useState([]);
    const [lastEvolucion1, setLastEvolucion1] = useState([]);


    useEffect(() => {

        if (evolucion1.length === lastEvolucion1.length && evolucion1.every((value, index) => value === lastEvolucion1[index])) {
            return;
        }
        setLastEvolucion1(evolucion1);

        async function fetchData() {
            setPokemon([])
            for (let i = 0; i < evolucion1.length; i++) {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + evolucion1[i]);
                setPokemon(prevPokemon => [...prevPokemon, response.data])
            }

        }

        fetchData().then(r => console.log(r)).catch(e => console.log(e));
    }, [evolucion1]);

    return (
        <>
            {
                pokemon.map((pokemon, index) => (
                    <div className='col' key={index}>
                        <div className="card border-dark">
                            <div className="card-header text-center text-uppercase">{pokemon.name}</div>
                            <img
                                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + pokemon.id + ".png"}
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">P: {pokemon.weight} Kg </p>
                                <p className="card-text">A: {pokemon.height} cm</p>

                            </div>
                        </div>
                    </div>
                ))


            }

        </>
    )
}


export default Evoluciones;