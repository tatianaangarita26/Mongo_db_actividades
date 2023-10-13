import './App.css'
import Card from './components/Card';
import vehicles from './data/vehicles';
import ShowHide from './components/ShowHide';

function App() {
  const vehicleList = vehicles.map((v) =>{
    return <Card title={v.name} description={v.description}/>;
  });

  return <div className="App">
    <h1>Helle there!</h1>
    <ShowHide />
    <div className='container'>
    {vehicleList}
  </div>

  </div>;

}

export default App
