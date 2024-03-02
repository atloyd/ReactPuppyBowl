import { useParams } from 'react-router';
import { fetchSinglePlayer } from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// import { deletePlayer } from '../api';

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
	});

	return (
		<div>
			<div key={singlePlayer.id} className='playerCard'>
				<img src={singlePlayer.imageUrl} alt='' />
				<h2>{singlePlayer.name}</h2>
				<p>{singlePlayer.breed}</p>
				<p>Status: {singlePlayer.status}</p>
				<button onClick={() => navigate('/')}>Return</button>
				{/* <button onClick={deletePlayer(singlePlayer.id)}>Delete</button> */}
			</div>
		</div>
	);
}
