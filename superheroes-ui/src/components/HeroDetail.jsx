import './App.css';
import AllHeroes from './components/AllHeroes';

function App() {
  const HeroDetail = (props) => {
    return (
      <div>
        <img src={batman} alt="Batman" height="250px"/>
        <p id="blue-alias">Alias: {props.info.alias}</p>
        <p className="green-class">Name: {props.info.name}</p>
        <button className="green-class">Like</button>   
      </div>
    )
  }
}

export default App;