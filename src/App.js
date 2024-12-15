import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllVisitors from './components/ViewAllVisitors';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>} />
      <Route path='/viewall' element={<ViewAllVisitors/>} />
    </Routes>
     </BrowserRouter>
  );
}
export default App;
