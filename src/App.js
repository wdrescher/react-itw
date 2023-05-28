import logo from './logo.svg';
import './App.css';
import SplashboardCTA from './Splashboard/Splashboard-CTA/Splashboard-CTA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SplashboardCTA 
          displayButton={true}
          header="Find Your Soldier"
          subtext="Search By Unit Name or Select Your Installation"
          buttonText="Search"
          buttonClick={() => console.log("ALERT")}
        />
      </header>
    </div>
  );
}

export default App;
