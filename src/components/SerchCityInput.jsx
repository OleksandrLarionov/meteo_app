import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import NewWheatherCard from './NewWeatherCard';
import { WiDaySunny } from 'react-icons/wi';
const key = '1b473b286344e47b4f21a6bfa60c9db9';
const keyMeteo = `&appid=${key}`;
const apiCities = `https://api.openweathermap.org/data/2.5/weather?q=`;

const SerchCityInput = () => {
	const [cityName, setCityName] = useState('');
	const [oneCityData, setOneCityData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const cityDataSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const cityResponse = await fetch(
				apiCities + cityName + keyMeteo + '&units=metric&lang=en'
			);
			if (cityResponse.ok) {
				const data = await cityResponse.json();
				setTimeout(() => {
					setOneCityData(data);
					setCityName('');
					setIsLoading(false);
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
			setIsLoading(false);
		}
	};
	return (
		<>
			<Container className='d-flex justify-content-center my-5'>
				<Row>
					<Col className='d-flex'>
						<Form onSubmit={cityDataSubmit} className='d-flex'>
							<Form.Group className='d-flex'>
								<Form.Control
									type='search'
									value={cityName}
									onChange={(e) => {
										setCityName(e.target.value);
									}}
									placeholder='Search your city...'
									className='border border-secondary border-1 me-2 	form-control-lg'
									required
								/>
								<button className='btn border border-secondary border-1' type='submit'>
									search
								</button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
			{isLoading ? (
				<div className='d-flex justify-content-center align-items-center'>
					<Spinner animation='border' role='status'>
						<span className='fs-1 text-warning'>
							<WiDaySunny />
						</span>
					</Spinner>
				</div>
			) : (
				oneCityData && <NewWheatherCard oneCityData={oneCityData} />
			)}
		</>
	);
};

export default SerchCityInput;
