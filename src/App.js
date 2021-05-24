import logo from './logo.svg';
import './App.css';
import Panel from './Panel';
import { AppContext, defaultContext } from './AppContext';

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={defaultContext}>
        <header>
        Header
        </header>
        <Panel />
      </AppContext.Provider>
    </div>
  );
}

export default App;
