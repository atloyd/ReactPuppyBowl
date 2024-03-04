import { addNewPlayer } from '../api';
import { useState } from 'react';

export default function NewPlayerForm() {
	const [name, setName] = useState('');
	const [breed, setBreed] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		const newPlayer = {
			name: name,
			breed: breed,
		};

		try {
			await addNewPlayer(newPlayer);
			setName('');
			setBreed('');
		} catch (error) {
			console.error(error.message);
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name: </label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<label htmlFor='breed'>Breed: </label>
				<input
					type='text'
					id='breed'
					value={breed}
					onChange={(event) => setBreed(event.target.value)}
				/>
				<button type='submit' className='submitButton'>
					Submit
				</button>
			</div>
		</form>
	);
}
