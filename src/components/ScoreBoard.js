import React from 'react';
import { useQuery } from 'react-query';
import { Game } from './Game';


export const ScoreBoard = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://statsapi.web.nhl.com/api/v1/schedule?&startDate=2022-11-28&endDate=2022-11-28 ').then(res =>
       res.json()
     )
   )
   if(isLoading) return <p>Loading ...</p>
   
  const previousDaysGames = data.dates[0].games;

  const game = previousDaysGames.map((game, index) => {
    console.log('check: game: ', game)
    return(
      <div style={{border:'solid black 1px', backgroundColor: 'grey', width: '50%', minHeight:'108px'}}>
        <Game game={game} index={index}/>
      </div>
    );
  })
  return (
    <>
      <div>GameData</div>
        {game}
    </>

)
}

// API CALL : 'https://statsapi.web.nhl.com/api/v1/schedule'
/*
?startDate=2018-01-09 Start date for the search
?endDate=2018-01-12 End date for the search
*/