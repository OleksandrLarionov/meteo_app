import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import NewWheatherCard from './NewWeatherCard';
import { WiDaySunny } from 'react-icons/wi';
import { getMeteoData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const SerchCityInput = () => {
	const [cityName, setCityName] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const getMeteoDataFromState = useSelector((state) => state.countryMeteoData.dataCity[0]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		dispatch(getMeteoData(cityName, setCityName, setIsLoading));
	};
	return (
		<>
			<Container className='d-flex justify-content-center my-5'>
				<Row>
					<Col className='d-flex'>
						<Form onSubmit={handleSubmit} className='d-flex'>
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
				getMeteoDataFromState && <NewWheatherCard />
			)}
		</>
	);
};

export default SerchCityInput;
