import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
