import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import SolutionRow from './components/SolutionRow';


const API_URL = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words';
const MAX_SOLUTIONS = 4;


function App() {

    const [data, setData] = useState([]);
    const [solution, setSolution] = useState('');
    const [solutionArray, setSolutionArray] = useState([]);

    useEffect( () => {
          const fetchData = async () => {
            const res = await axios.get(API_URL);
            const array = res.data.split('\n');
            setData(array);
            setSolution(array[Math.floor(Math.random()*array.length)]);

            let targetSolutions = [];
            for (let i = 0; i < MAX_SOLUTIONS; i++){
              targetSolutions.push(array[Math.floor(Math.random()*array.length)]);
            }
            setSolutionArray(targetSolutions);
          }

          fetchData();
    }, []);

  return (
    <div className="App">
      {
        solutionArray.map(sol =>{
          return <SolutionRow word = {sol}/>
        })
      }
        
    </div>
  );
}

export default App;
