import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { parseISO, format } from 'date-fns';
import { it } from 'date-fns/locale';
const OneCard = ({ fourDayData }) => {
	if (!fourDayData) {
		return (
			<div>
				<Spinner animation='border' role='status'>
					<span>Loading...</span>
				</Spinner>
			</div>
		);
	}
	return fourDayData
		.map((day, i) => {
			const urlIcon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
			return (
				<Container id='singleCard' key={i}>
					<Row className='justify-content-between pe-2'>
						<Col className='p-0'>
							{' '}
							{format(parseISO(day.dt_txt), 'd MMM', {
								locale: it,
							})}
						</Col>
						<Col className='m-0 p-0'>
							<img src={urlIcon} alt='temp' className='w-100' />
						</Col>
						<Col className='text-end ps-0'>{parseInt(day.main.temp_max)}°C</Col>
					</Row>
					<Row className='justify-content-between pe-2'>
						<Col className='p-0'>{parseInt(day.main.temp)}°C</Col>
						<Col className='text-end ps-0'>{parseInt(day.main.temp_min)}°C</Col>
					</Row>
				</Container>
			);
		})
		.slice(1, 5);
};

export default OneCard;
