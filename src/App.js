import './App.css';
import { ScoreBoard } from './components/ScoreBoard';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const App = () => {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <ScoreBoard/>
    </QueryClientProvider>
    </div>
  );
}

export default App;