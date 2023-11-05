import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SerchCityInput from './components/SerchCityInput';

function App() {
	return (
		<Container fluid>
			<SerchCityInput />
		</Container>
	);
}

export default App;
