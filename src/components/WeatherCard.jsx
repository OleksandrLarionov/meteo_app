import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const WeatherCard = ({ oneCityData }) => {
	return (
		<Container>
			<Row>
				<Col className='d-flex justify-content-center'>
					<Card border='primary' style={{ width: '400px' }}>
						<Card.Body>
							<Card.Title className='fs-1 ms-4 d-flex justify-content-between align-items-center'>
								{parseInt(oneCityData.main.temp)}°C
								<div>
									<img
										src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp'
										width='150px'
										alt='sun'
									/>
								</div>
							</Card.Title>
							<Card.Text className='fs-5 ms-4'>{oneCityData.name}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default WeatherCard;
