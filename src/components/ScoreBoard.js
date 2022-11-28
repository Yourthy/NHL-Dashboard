import React from 'react';
import { useQuery } from 'react-query';
import { Game } from './Game';


export const ScoreBoard = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://statsapi.web.nhl.com/api/v1/schedule').then(res =>
       res.json()
     )
   )
   if(isLoading) return <p>Loading ...</p>
   
  const previousDaysGames = data.dates[0].games;

  const game = previousDaysGames.map((game, index) => {
    return(
    <Game game={game} index={index}/>
    );
  })
  return (
    <>
    <div>ScoreBoard</div>
    {game}
    </>

)
}

// API CALL : 'https://statsapi.web.nhl.com/api/v1/schedule'