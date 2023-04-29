import React from 'react'

const ListTeams = ({ team }) => {

  const { intFormedYear, intStadiumCapacity, strAlternate, strDescriptionEN, strStadium, strTeamJersey, strStadiumThumb } = team;

  return (
    <div className='shadow-md rounded-md bg-slate-100 text-center py-4 px-4 mb-6 grid md:grid-cols-2 items-center gap-6'>
      <div>
        <p className='font-bold'>Fundacion: <span className='font-normal text-lg'>{intFormedYear}</span></p>
        <p className='font-bold'>Capacidad del estadio: <span className='font-normal text-lg'>{intStadiumCapacity} personas</span></p>
        <p className='font-bold mb-3'>Nombre: <span className='font-normal text-lg'>{strAlternate}</span></p>
        <img className='mx-auto w-64 mb-3' src={strTeamJersey} alt="escudo" />
        <p className='mb-2 line-clamp-6'>{strDescriptionEN}</p>
      </div>

      <div>
        <h2 className='font-bold text-2xl mb-3'>{strStadium}</h2>
        <img src={strStadiumThumb} alt="estadio" />
      </div>
    </div>
  )
}

export default ListTeams