import React from 'react';

const Cards = ({pokemon, loading, infoPokemon}) => {


    return (
        <>
            {
                loading ? <h1>Cargando...</h1> :
                    pokemon.map((pica) => {
                        return (

                            <div className="col" id={pica.id} key={pica.id}>
                                <div className="card border-dark">
                                    <div className={"card-header text-center text-uppercase"}><h5>{pica.name}</h5>
                                    </div>

                                    <img
                                        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pica.id + ".png"}
                                        className="card-img-top"
                                        alt={pica.name}/>
                                    <div className="card-body">

                                        <p className="card-text">Peso: {pica.weight} Kg </p>
                                        <p className="card-text">Altura: {pica.height} cm</p>

                                        <ul className="list-group" style={{columnCount: 2}}>Tipo(s)
                                            {
                                                pica.types.map((tipo) => {
                                                    return (
                                                        <>
                                                            <li className="list-group-item"> {tipo.type.name}</li>
                                                        </>
                                                    )
                                                })
                                            }</ul>

                                    </div>

                                    <div className="card-footer text-center">
                                        <button className="btn btn-outline-danger" onClick={() => infoPokemon(pica)}>Ver
                                            Detalle
                                        </button>
                                    </div>
                                </div>
                            </div>


                        );
                    })
            }
        </>
    );
}

export default Cards;
