import './App.css';
import AllPlayers from './components/AllPlayers';
// import AllPlayers from './components/AllPlayers';
// import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={
								<div>
									<NewPlayerForm />
									<AllPlayers />
								</div>
							}
						/>
						<Route path={`/:id`} element={<SinglePlayer />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
