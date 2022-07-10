import './App.css';
import MainPage from "./pages/MainPage";
import {useEffect, useState} from "react";
import axios from "axios";


const API_URL = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words';

const App = () => {
    const [data, setData] = useState([]);
    useEffect( () => {

        const fetchData = async () => {
            const res = await axios.get(API_URL);
            setData(res.data.split('\n'));
        };

        fetchData();
    },[]);

  return (
    <div className="App">
      <MainPage words = {data}/>
    </div>
  );
}

export default App;
