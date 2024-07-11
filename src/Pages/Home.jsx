import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../assets/slices/pokemonSlice';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokeName, setPokeName] = useState('');
  const [pokeLimit, setPokeLimit] = useState(10)
  const dispatch = useDispatch();
  const pokeStatus = useSelector((state) => state.pokes.status);
  const pokemons = useSelector((state) => state.pokes.pokemons);
  const error = useSelector((state) => state.pokes.error);


  useEffect(() => {
    if (pokeStatus === 'none') {
      dispatch(getPokemon());
    }
  }, [pokeStatus, dispatch]);

  const pokeResult = pokeName
    ? pokemons.filter((item) =>
      item.data.name && item.data.name.toLowerCase().includes(pokeName.toLowerCase())
    )
    : pokemons;

  const limitPokeResult = pokeResult.slice(0, pokeLimit);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[35rem] my-4 gap-2'>
        <input
          onChange={(e) => setPokeName(e.target.value)}
          type='text'
          placeholder='Buscar pokemon...'
          className='border-2 border-black rounded-md w-full px-4 bg-cyan-300 text-black'
        />
        <div className='border-2 border-black rounded-md bg-gray-100 cursor-pointer hover:bg-gray-300 duration-300'>
          <img src='/img/Lupa_EP.png' alt='Icono Lupa' className='w-10 ' />
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {limitPokeResult.length > 0 ? (
          limitPokeResult.map((item, i) => (
            <PokemonCard key={i} pokemonData={item} />
          ))
        ) : (
          <p>No se encontraron Pokémon</p>
        )}

      </div>
      {pokeLimit < 100 &&
        <div className='h-20 w-full flex items-center justify-center '>
          <p className='bg-red-600 hover:bg-red-700 duration-200 text-xl px-4 rounded-full text-white border cursor-pointer' onClick={() => setPokeLimit(pokeLimit < 100 && pokeLimit + 10)}>Ver Mas</p>
        </div>
      }

    </div>
  );
};

export default Home;
