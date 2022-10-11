import './App.css';
import Card from './components/Card';
import CardV2 from './components/CardV2';

function App() {
  return (
      <div className="App container">
          <div className="bg-light py-1 md-2">
              <h2 className="text-center">Example Application</h2>
          </div>
          <div className="row justify-content-center">
              <Card
                  itemId='1'
                  itemName='text record1'
                  itemDescription='text record 1 Desc'
                  itemImage='https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg'
                  itemCost="15.00"
              />
              <CardV2
                  itemId='2'
                  itemName='text record2'
                  itemDescription='text record 2 Desc'
                  itemImage='https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg'
                  itemCost="10.00"
              />
          </div>
    </div>
  );
}

export default App;
