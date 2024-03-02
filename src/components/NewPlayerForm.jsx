import { addNewPlayer } from "../api";

export default function NewPlayerForm() {
    return <div className="form">
        <form action="submit">
            <label>Name: </label>
            <input type="text" placeholder="Name"/>
            <label>Breed: </label>
            <input type="text" placeholder="Breed"/>
            <label>Team: </label>
            <input type="text" placeholder="Team"/>
            <button onClick={addNewPlayer} >Submit</button>
        </form>
    </div>
}
