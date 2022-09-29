
import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Exercise></Exercise>
      <Blog></Blog>

    </div>
  );
}

export default App;
