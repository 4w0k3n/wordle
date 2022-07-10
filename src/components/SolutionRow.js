import { useEffect, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';

function SolutionRow(props) {
	
	return (
		<div>
			<ButtonGroup size="lg" className="mb-2" style={{ margin: '20px' }}>
				{[...props.word].map((letter, i) => {
					return (
						<Button
							variant={props.checkLetterColor(letter, i)}
							style={{
								width: '70px',
								height: '70px',
								margin: '5px',
							}}
						>
							{letter.toUpperCase()}
						</Button>
					);
				})}
			</ButtonGroup>
		</div>
	);
}

export default SolutionRow;
