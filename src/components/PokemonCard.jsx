import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemonData }) => {

  const generalPill = 'rounded-full w-20 text-center text-white'
  const bugPill = 'bg-emerald-900'
  const electricPill = 'bg-yellow-400'
  const figthingPill = 'bg-orange-700'
  const firePill = 'bg-red-500'
  const flyingPill = 'bg-sky-400'
  const ghostPill = 'bg-blue-900'
  const grassPill = 'bg-green-600 '
  const groundPill = 'bg-amber-900'
  const icePill = 'bg-blue-200'
  const normalPill = 'bg-gray-400'
  const poisonPill = 'bg-purple-600'
  const psychicPill = 'bg-pink-500'
  const rockPill = 'bg-amber-950'
  const waterPill = 'bg-blue-500'
  const fairyPill = 'bg-fuchsia-900'



  return (
    <Link to={`/description/${pokemonData.data.name}`} className='w-[20rem] h-[25rem] border border-black rounded-md p-4 items-center  flex flex-col'>
      <div className='flex w-full justify-between'>
        <h2 className='capitalize font-semibold text-lg'>{pokemonData.data.name}</h2>
        <h2 className='capitalize font-semibold text-lg'>#{pokemonData.data.id}</h2>

      </div>
      <div className='bg-[url(img/background-pokemon.jpg)] bg-cover w-full h-[15rem] p-8 flex items-center justify-center mb-2'>
        {/* <img src={pokemonData.data.sprites.other.dream_world.front_default} alt={pokemonData.data.name} className='h-full' /> */}
        <img src={pokemonData.data.sprites.other.showdown.front_default} alt={pokemonData.data.name} className='h-[50%]' />
      </div>
      <div className='flex gap-2 capitalize font-semibold w-full justify-end'>
        {pokemonData.data.types.map((tipo, i) => (
          <p key={i} className={` ${generalPill} 
          ${tipo.type.name === 'bug' && bugPill}
          ${tipo.type.name === 'electric' && electricPill}
          ${tipo.type.name === 'fighting' && figthingPill}
          ${tipo.type.name === 'fire' && firePill}
          ${tipo.type.name === 'flying' && flyingPill}
          ${tipo.type.name === 'ghost' && ghostPill}
          ${tipo.type.name === 'grass' && grassPill}
          ${tipo.type.name === 'ground' && groundPill}
          ${tipo.type.name === 'ice' && icePill}
          ${tipo.type.name === 'normal' && normalPill}
          ${tipo.type.name === 'poison' && poisonPill}
          ${tipo.type.name === 'psychic' && psychicPill}
          ${tipo.type.name === 'rock' && rockPill}
          ${tipo.type.name === 'water' && waterPill}            
          ${tipo.type.name === 'fairy' && fairyPill}            
            `
          } >{tipo.type.name}</p>
        ))}
      </div>
    </Link>
  )
}

export default PokemonCard