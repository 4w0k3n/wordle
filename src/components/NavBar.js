import { Navbar, Container, Badge } from 'react-bootstrap';

function NavBar(props) {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Wordle</Navbar.Brand>
			</Container>
			<div style={{ marginRight: '20%' }}>
				<h2>
					<Badge variant="outline-success">

					</Badge>
				</h2>
			</div>
		</Navbar>
	);
}

export default NavBar;
