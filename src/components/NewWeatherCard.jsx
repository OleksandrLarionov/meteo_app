import { useEffect, useState } from 'react';
import DataFourDays from './DataFourDays';
import { Col, Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const NewWheatherCard = ({ oneCityData }) => {
	const today = new Date();
	const fullDate = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
	const urlIcon = `http://openweathermap.org/img/w/${oneCityData.weather[0].icon}.png`;
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Container className=' w-75' id='card' test>
			<Row className='p-3'>
				{/* Column start */}
				<Col>
					<Row>
						<Col>
							{oneCityData.name}, {oneCityData.sys.country}
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
							{parseInt(oneCityData.main.temp)}
							<span className='fs-1 fs-md-4'>°C</span>
						</Col>
						<Col className='text-end pt-2'>{oneCityData.weather[0].description}</Col>
					</Row>
				</Col>
				{/* end */}
				<Col>
					<Row>
						<Col className='text-end '>Humidity: {oneCityData.main.humidity}%</Col>
					</Row>
					<Row>
						<Col className='text-end '>
							Wind: {oneCityData.wind.speed} m/s | {oneCityData.wind.deg} °
						</Col>
					</Row>
					<Row>
						<Col className='text-end '>High: {parseInt(oneCityData.main.temp_max)}°</Col>
					</Row>
					<Row>
						<Col className='text-end '>Low: {parseInt(oneCityData.main.temp_min)}°</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col className='d-md-flex p-0'>
					<DataFourDays nameOfCity={oneCityData.name} />
				</Col>
			</Row>
		</Container>
	);
};

export default NewWheatherCard;
