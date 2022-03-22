import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
<Routes>
<Route path="/home" element={<Home/>} />
<Route path="create" element={<Create/>} />
</Routes>
    </div>
  );
}

export default App;
