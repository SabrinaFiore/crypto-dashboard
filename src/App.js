import './App.css';
import CoinList from './Components/CoinList/CoinList';
import CoinDetail from './Components/CoinDetail/CoinDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinList></CoinList>}></Route>
          <Route path="/coin/detail/:coin" element={<CoinDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
