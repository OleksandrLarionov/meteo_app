import { fireEvent, render, screen } from '@testing-library/react';
import SerchCityInput from '../components/SerchCityInput';

describe('General mounting', () => {
	it('mounts correctly the component SerchCityInput', () => {
		render(<SerchCityInput />);
		const button = screen.getByText(/search/i);

		expect(button).toBeInTheDocument();
	});
	it('mounts correctly the component SerchCity', () => {
		render(<SerchCityInput />);
		const serchInput = screen.getByPlaceholderText(/Search your city/i);
		expect(serchInput).toBeInTheDocument();
	});
	// it('serarch correctly country', () => {
	// 	render(<SerchCityInput />);
	// 	const serchInput = screen.getByPlaceholderText(/Search your city/i);
	// 	fireEvent.change(serchInput, { target: { value: 'rome' } });

	// });
});
