import { fetchAllPlayers } from '../api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllPlayers() {
	const [players, setPlayers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function renderPlayers() {
			const players = await fetchAllPlayers();
			setPlayers(players.players);
		}
		renderPlayers();
	}, []);
	return (
		<div className='players'>
			{players.map((player) => {
				return (
					<div key={player.id} className='playerCard'>
						<img src={player.imageUrl} alt='' />
						<h2>{player.name}</h2>
						<button onClick={() => navigate(`/${player.id}`)}>Details</button>
					</div>
				);
			})}
		</div>
	);
}
