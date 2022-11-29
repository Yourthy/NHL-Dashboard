import React from 'react'

export const Game = ({game}) => {
  const homeTeam = game.teams.home;
  const awayTeam = game.teams.away;
  return (
    <div>
      <div>
      <h2 style={{color: '#bdc1c6'}}>{homeTeam.team.name}: {homeTeam.score}</h2>
      </div>
      <div>
      <h2 style={{color: 'white'}}>{awayTeam.team.name}: {awayTeam.score}</h2>
      </div>
     
    </div>
  )
}
