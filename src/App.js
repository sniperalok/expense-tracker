import logo from './logo.svg';
import './App.css';
import XExpenseTracker from "./components/XExpenseTracker";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <XExpenseTracker />
    </div>
  );
}

export default App;