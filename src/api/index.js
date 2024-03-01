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
