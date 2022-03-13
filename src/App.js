import './App.css';
import Root from './components/Root';
import Payment from './components/paymentManager/Payment';
import PaymentForm from "./components/paymentManager/CreditCard"
import {
  Routes,
  Route,
} from "react-router-dom";
import FinalMessage from './components/Bill/FinalMessage';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Root/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/card" element={<PaymentForm/>} />
          <Route path="/success" element={<FinalMessage tag="true"/>} />
          <Route path="/unsuccessfull" element={<FinalMessage tag="false"/>} />
    </Routes>

  );
}

export default App;
