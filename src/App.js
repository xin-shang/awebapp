import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import CardV2 from './components/CardV2';
import CardV3 from './components/CardV3';

function App() {
  return (
      <div className="App container">
          <div className="bg-light py-1 md-2">
              <h2 className="text-center">Example Application</h2>
          </div>
          <div className="row justify-content-center">
              <CardList />
          </div>
    </div>
  );
}

export default App;
