import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { Billet, Contact, Nouvelle, Planning } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/'/>
        <Route path='Planning' element={<Planning/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Nouvelle' element={<Nouvelle/>} />
        <Route path='Billet' element={<Billet/>} />
      </Routes>
    </div>
  );
}

export default App;
