import { useEffect, useState } from 'react';
import OneCard from './OneCard';
import { Col } from 'react-bootstrap';
const key = '1b473b286344e47b4f21a6bfa60c9db9';
const keyMeteo = `&appid=${key}`;
const dataFour = `https://api.openweathermap.org/data/2.5/forecast/?q=`;

const DataFourDays = ({ nameOfCity }) => {
	const [fourDayData, setfourDayData] = useState(null);
	const fourData = async () => {
		try {
			const response = await fetch(dataFour + nameOfCity + keyMeteo + '&units=metric&lang=en');
			if (response.ok) {
				const data = await response.json();
				setTimeout(() => {
					setfourDayData(data.list.filter((day, index) => index % 8 === 0));
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	useEffect(() => {
		if (nameOfCity) {
			fourData();
		}
	}, [nameOfCity]);

	return (
		<>
			<Col className='col d-md-flex justify-content-between col-md-12'>
				<OneCard fourDayData={fourDayData} />
			</Col>
		</>
	);
};

export default DataFourDays;
