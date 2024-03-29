import React, {useEffect, useState} from 'react';

import Cards from "./Cards";
import './estilo.css'
import Detalle from "./Detalle";
import axios from "axios";

export function Principal() {

    //variable en arreglo para guardar los pokemones
    const [pokemonList, setPokemonList] = useState([]);

    //vaiables para el loading
    const [loading, setLoading] = useState(true);

    //variables para las url
    const [urls, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    //variables para la paginacion
    const [siguienteUrl, setSiguienteUrl] = useState();
    const [anteriorUrl, setAnteriorUrl] = useState();

    //variable para guardar el pokemon seleccionado
    const [pokeDex, setPokeDex] = useState();

    // const  [numero, setNumero] = useState();

    const ComponenteIzquierdo = () => <h1 className="text-center">LISTADO DE LOS POKEMONES </h1>;
    const ComponenteDerecho = () => <h1 className="text-center">DETALLES DEL POKEMON</h1>;

    const pokemones = async () => {

        setLoading(true);
        const res = await axios.get(urls);
        setSiguienteUrl(res.data.next);
        setAnteriorUrl(res.data.previous);
        getPokemones(res.data.results);
        setLoading(false);

    };

    const getPokemones = async (response) => {

        response.map(async (item) => {
            const resultado = await axios.get(item.url);
            setPokemonList(state => {
                state = [...state, resultado.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            });

        });
    };

    useEffect(() => {
        pokemones();
    }, [urls]);

    return (
        <>
            <div className={"p-5 fondo"}>


                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col col-lg-4">

                        <div className="card p-3">
                            <ComponenteDerecho/>
                            <Detalle data={pokeDex}/>
                        </div>
                    </div>

                    <div className="col col-lg-8">
                        <div className="card p-3">
                            <ComponenteIzquierdo/>

                            <div className="text-center p-2">
                                <div className="d-grid gap-2 d-md-block">

                                    {anteriorUrl && <button onClick={() => {
                                        setPokemonList([])
                                        setUrl(anteriorUrl)
                                    }} className="btn btn-success">ANTERIOR</button>}

                                    {siguienteUrl && <button onClick={() => {
                                        setPokemonList([])
                                        setUrl(siguienteUrl)
                                    }} className="btn btn-primary">SIGUIENTE</button>}

                                </div>
                            </div>

                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <Cards pokemon={pokemonList} loading={loading}
                                       infoPokemon={pokee => setPokeDex(pokee)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
