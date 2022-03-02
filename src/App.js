import './App.css';
import Root from './components/Root';
import Payment from './components/Payment';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Root/>} />
          <Route path="/payment" element={<Payment/>} />
         
    </Routes>

  );
}

export default App;
