import react from 'react';
import { useQuery } from 'react-query'

const GetGameScheduleData = () => {
  const { isLoading, error, data } = useQuery('gameData', () =>
    fetch('https://statsapi.web.nhl.com/api/v1/schedule').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
};

export default GetGameScheduleData;