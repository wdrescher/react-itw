import logo from './logo.svg';
import './App.css';

import Splashboard from './Splashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Splashboard displayLeftMode={false}></Splashboard>
        <Splashboard displayLeftMode={true}></Splashboard>
      </header>
    </div>
  );
}

export default App;
