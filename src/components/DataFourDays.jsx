import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../redux/action';
import OneCard from './OneCard';
const DataFourDays = () => {
	const nameOfCity = useSelector(
		(state) => state.countryMeteoData.dataCity[0].name && state.countryMeteoData.dataCity[0].name
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getForecast(nameOfCity));
	}, []);

	return (
		<>
			<Col className='col d-md-flex justify-content-between col-md-12'>
				<OneCard />
			</Col>
		</>
	);
};

export default DataFourDays;
