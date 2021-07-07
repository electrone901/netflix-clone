import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App"><h1>Hello</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

    </div>
  );
}

export default App;
