import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import SolutionRow from './SolutionRow';
function InputRow(props) {
	const [input, setInput] = useState('');

	const handleUserKeyPress = useCallback((event) => {
		if (event.key === 'Backspace') {
			setInput(input.slice(0, -1));
			return;
		}
		if (input.length > props.solution.length) {
			return;
		}
		if (event.keyCode === 32 || (event.keyCode >= 65 && event.keyCode <= 90)) {
			setInput(input + event.key);
			return;
		}
	});

	useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<div>
			<div>
				{
					<ButtonGroup size="lg" className="mb-2" style={{ margin: '20px' }}>
						{[
							[...props.solution].map((letter, i) => {
								return (
									<Button
										style={{
											width: '100px',
											height: '100px',
											margin: '5px',
										}}
									>
										{input[i] === undefined ? '-' : input[i].toUpperCase()}
									</Button>
								);
							}),
						]}
					</ButtonGroup>
				}
			</div>
		</div>
	);
}

export default InputRow;
