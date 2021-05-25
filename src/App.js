import './App.css';
import Panel from './Panel';
import FakeServer from './FakeServer';
import EventEmitter from 'eventemitter3';
import { AppContext } from './AppContext';

const appContext = {
  title: 'Superprogram v1.0', 
  color: 'red',
  server: new FakeServer(),
  bus: new EventEmitter()
};

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={appContext}>
        <header>
        Header
        </header>
        <Panel />
      </AppContext.Provider>
    </div>
  );
}

export default App;
