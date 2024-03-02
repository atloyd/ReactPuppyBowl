export const API = `https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-PT-SF/players`;

export async function fetchAllPlayers() {
	try {
		const response = await fetch(API);
		const results = await response.json();
		return results.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchSinglePlayer(playerId) {
	try {
		const response = await fetch(`${API}/${playerId}`);
		const results = await response.json();
		return results.data;
	} catch (error) {
		console.error(error);
	}
}

export async function addNewPlayer(name, breed, team) {
	try {
		const response = await fetch(`${API}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
			name: name.value,
			breed: breed.value,
			team: team.value,
		});

		const json = await response.json();

		if (json.error) {
			throw new Error(json.message);
		}
	} catch (error) {
		console.error(error);
	}
}

export async function deletePlayer(playerId) {
	try {
		const response = await fetch(`${API}/${playerId}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Failed to delete player.');
		}
	} catch (error) {
		console.error(error);
	}
}
