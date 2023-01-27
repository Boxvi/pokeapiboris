import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from "./Cards";
import './estilo.css'
import Detalle from "./Detalle";

export function Principal() {

    //variable en arreglo para guardar los pokemones
    const [pokemonList, setPokemonList] = useState([]);

    //vaiables para el loading
    const [loading, setLoading] = useState(true);

    //variables para las url
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

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
        const res = await axios.get(url);
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
    }, [url]);

    return (
        <>
            <div className={"p-5 fondo"}>

                <div className="row">
                    <div className="col-9">
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
                            <Cards pokemon={pokemonList} loading={loading} infoPokemon={pokee => setPokeDex(pokee)}/>
                        </div>
                    </div>


                    <div className="col-3">
                        <ComponenteDerecho/>
                        <Detalle data={pokeDex}/>
                    </div>
                </div>

            </div>

        </>
    )

}

/*

                            /

                    <button type="button" className="btn btn-success BsArrowLeft" disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}>
                        ANTERIOR
                    </button>

                    <button type="button" className="btn btn-primary" disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}>

                    </button>



    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [pokemonData, setPokemonData] = useState({});


    //METODO PARA LLAMAR A LOS POKEMONES
    useEffect(() => {

        async function fetchData() {
            //obtener los pokemons en la pagina actual
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage - 1) * 20}`);
           // setPokemonList(response.data.results)
            console.log(response.data.results)
            getPokemon(response.data.results)
            setTotalPages(Math.ceil(response.data.count / 20));
        }

        fetchData().then(r => {
            console.log(r)
        });
    }, [currentPage]);

    const getPokemon = async (response) => {
        response.map(async (pokemon) => {
            const resultado = await axios.get(pokemon.url);

            setPokemonList((prev) => [...prev, resultado.data]);
            /*
            setPokemonList(state => {
                state = [...state, resultado.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            }

            // setPokemonList((prev) => [...prev, resultado.data]);
            // console.log(resultado.data)
            //setPokemonList(resultado.data)

            //console.log(pokemonList)


        });
    };


    return (
        <div className="p-5">



            <div className="row row-cols-1 row-cols-md-6 g-4">
                <>


                    {pokemonList.map((pokemon) => (
                        <div className="col" key={pokemon.name} id={pokemon.name}>
                            <div className="card">
                                <img
                                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png'}/>

                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p className="card-text">{pokemon.height}</p>
                                    <p className="card-text">{pokemon.weight}</p>

                                </div>
                            </div>

                        </div>
                    ))}


                </>
            </div>


        </div>
    )

}
*/