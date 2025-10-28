import './App.css';

function Pokemon(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} style={{width:300}}/>
    </div>
  )
}

function App() {
  return (
    <>
      <h1 align="center">Pokedex</h1>
      <div class="card">
        <Pokemon name="Gengar" image="images/gengar.png" alt="Gengar"/>
        <div class="container">
          <h4><b>Gengar&nbsp;&nbsp;&nbsp;</b></h4> 
          <p>Type: Ghost/Poison</p> 
        </div>
      </div>
      <div class="card">
        <Pokemon name="Mew" image="images/mew.png" alt="Mew"/>
        <div class="container">
          <h4><b>Mew&nbsp;&nbsp;&nbsp;</b></h4> 
          <p>Type: Psychic</p> 
        </div>
      </div>
      <div class="card">
        <Pokemon name="Garchomp" image="images/garchomp.png" alt="Garchomp"/>
        <div class="container">
          <h4><b>Garchomp&nbsp;&nbsp;&nbsp;</b></h4> 
          <p>Type: Dragon/Ground</p> 
        </div>
      </div>
    </>
  );
}

export default App;
