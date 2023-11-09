import { useEffect, useState } from 'react';
import DataFourDays from './DataFourDays';
import { Col, Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { useSelector } from 'react-redux';

const NewWheatherCard = () => {
	const getMeteoDataFromState = useSelector(
		(state) => state.countryMeteoData.dataCity[0] && state.countryMeteoData.dataCity[0]
	);
	console.log(getMeteoDataFromState);
	const urlIcon =
		getMeteoDataFromState &&
		`http://openweathermap.org/img/w/${getMeteoDataFromState.weather[0].icon}.png`;

	const today = new Date();
	const fullDate = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);
	return (
		getMeteoDataFromState && (
			<Container className=' w-75' id='card'>
				<Row className='p-3'>
					{/* Column start */}
					<Col>
						<Row>
							<Col>
								{getMeteoDataFromState.name}, {getMeteoDataFromState.sys.country}
							</Col>
						</Row>
						<Row>
							<Col>{fullDate}</Col>
						</Row>
						<Row>
							<Col>{format(currentTime, 'HH:mm:ss', { locale: it })}</Col>
						</Row>
					</Col>
					{/* Central column */}
					<Col className='d-md-flex justify-content-center align-items-center'>
						<img src={urlIcon} alt='icon' className='w-50' />

						<Row className='d-flex flex-column flex-grow-1'>
							<Col
								className=' d-flex align-items-center justify-content-center p-0 fw'
								id='main_temp'>
								{parseInt(getMeteoDataFromState.main.temp)}
								<span className='fs-1 fs-md-4'>°C</span>
							</Col>
							<Col className='text-end pt-2'>
								{getMeteoDataFromState.weather[0].description}
							</Col>
						</Row>
					</Col>
					{/* end */}
					<Col>
						<Row>
							<Col className='text-end '>
								Humidity: {getMeteoDataFromState.main.humidity}%
							</Col>
						</Row>
						<Row>
							<Col className='text-end '>
								Wind: {getMeteoDataFromState.wind.speed} m/s |{' '}
								{getMeteoDataFromState.wind.deg} °
							</Col>
						</Row>
						<Row>
							<Col className='text-end '>
								High: {parseInt(getMeteoDataFromState.main.temp_max)}°
							</Col>
						</Row>
						<Row>
							<Col className='text-end '>
								Low: {parseInt(getMeteoDataFromState.main.temp_min)}°
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className='d-md-flex p-0'>
						<DataFourDays nameOfCity={getMeteoDataFromState.name} />
					</Col>
				</Row>
			</Container>
		)
	);
};

export default NewWheatherCard;
