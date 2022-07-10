import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SolutionRow from './components/SolutionRow';
import InputRow from './components/InputRow';
import NavBar from './components/NavBar';


const API_URL = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words';
const MAX_SOLUTIONS = 4;

function App() {
	const [data, setData] = useState([]);
	const [solution, setSolution] = useState('');
	const [solutionArray, setSolutionArray] = useState([]);

	const checkLetterColor = (letter, index) => {
		if (solution[index] == letter) {
			return 'success';
		} else if (solution.includes(letter)) {
			return 'warning';
		} else if (!solution.includes(letter)) {
			return 'danger';
		}
	};

  const handleEnterKeyPress = (input) => {
    let result = solutionArray.slice(1);
    result.push(input);
    setSolutionArray(result);
  };

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(API_URL);
			const array = res.data.split('\n');
			setData(array);
			setSolution(array[Math.floor(Math.random() * array.length)]);

			let targetSolutions = [];
			for (let i = 0; i < MAX_SOLUTIONS; i++) {
				targetSolutions.push(array[Math.floor(Math.random() * array.length)]);
			}
			setSolutionArray(targetSolutions);
		};

		fetchData();
	}, []);

	return (
		<div className="App">
      <NavBar></NavBar>
			{solutionArray.map((sol) => {
				return <SolutionRow word={sol} solution={solution} checkLetterColor={checkLetterColor} />;
			})}

			<InputRow solution={solution} handleEnterKeyPress = {handleEnterKeyPress}  />
		</div>
	);
}

export default App;
