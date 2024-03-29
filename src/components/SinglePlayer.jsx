import { useParams } from 'react-router';
import { fetchSinglePlayer } from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { deletePlayer } from '../api';

export default function SinglePlayer() {
	const { id } = useParams();
	const [singlePlayer, setSinglePlayers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function renderPlayers() {
			const player = await fetchSinglePlayer(id);
			setSinglePlayers(player.player);
		}
		renderPlayers();
	}, [id]);

	async function handleDelete() {
		try {
			await deletePlayer(singlePlayer.id);
			navigate('/');
		} catch (error) {
			console.error(error.message);
		}
	}

	return (
		<div>
			<h1>Player Details:</h1>
			<div key={singlePlayer.id} className='playerCard'>
				<img src={singlePlayer.imageUrl} alt='' />
				<h2>{singlePlayer.name}</h2>
				<h3>{singlePlayer.breed}</h3>
				<h4>Status: {singlePlayer.status}</h4>
				<button onClick={() => navigate('/')}>Return</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}
