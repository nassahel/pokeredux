import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDescription = () => {
    const [poke, setPoke] = useState({})

    const { name } = useParams()

    const getPokemon = async () => {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPoke(pokemon.data)
    }
    
    console.log(poke);

    useEffect(() => {
        getPokemon()
    }, [])




    return (
        <div>{poke.name}</div>
    )
}

export default PokemonDescription