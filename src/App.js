import './App.css';
import { cantusFirmus, mySequence } from './components/Instances';

function App() {
  mySequence.getSonorities();

  return (
    <div className="App">
      <h1>Procedural Music Generation with Javascript</h1>
      <h2>This project will contain some initial thoughts about establishing a uniform syntax for representing and manipulating constructs in traditional music theory as code.</h2>

      <h3>First Species: Note against Note</h3>
      <p>This variety of counterpoint consists of a chain of simultaneous consonances between two voices.<br/>The goal here is to handle and resolve legal dissonance within strict parameters.</p>

      <h4>Cantus Firmus:</h4>
      <p className="monospaced">{cantusFirmus.returnLetters()}</p>
      
      <h4>The provided solution:</h4>
      <div>{mySequence.mapLayers()}</div>
    </div>
  );
}

export default App;
