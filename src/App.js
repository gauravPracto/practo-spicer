import './App.css';
import Root from './components/Root';
import Payment from './components/Payment';
import PaymentForm from "./components/CreditCard"
import {
  Routes,
  Route,
} from "react-router-dom";
import FinalMessage from './components/FinalMessage';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Root/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/card" element={<PaymentForm/>} />
          <Route path="/success" element={<FinalMessage/>} />
    </Routes>

  );
}

export default App;
