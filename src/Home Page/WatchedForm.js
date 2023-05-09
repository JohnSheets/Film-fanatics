import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const WatchedForm = () => {

        const [watched, updateWatched] = useState({
            title: "",
            rating: "",
            imageURL: "",
            watchAgain: Boolean
        })

        const navigate = useNavigate()

    const localFilmUser = localStorage.getItem("Film_user")
    const filmUserObject = JSON.stringify(localFilmUser)

    const handleSaveButtonClick = (event) => {
        // event.preventDefult()


        const movieToSendToAPI = {
            userId: filmUserObject.id, 
            title: watched.title, 
            image: watched.image,
            watchAgain: watched.watchAgain
        }

        fetch (`http://localhost:8088/WatchedMovies`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieToSendToAPI)
        })

        .then(response => response.json())
        .then(() => {
            navigate("/WatchedMovies")
        })

    }

    return <>
        <form className="favoriteForm">
            <h2 className="favoritForm_title">Add Movie</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Movie Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Movie Title"
                        value={watched.title}
                        onChange={
                                (evt) => {
                                        const copy = {...watched}
                                        copy.title = evt.target.value
                                        updateWatched(copy)
                                }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Image URL:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="URL"
                        value={watched.image}
                        onChange={
                                (evt) => {
                                        const copy = {...watched}
                                        copy.image = evt.target.value
                                        updateWatched(copy)
                                }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="watchAgian">Watch Again?</label>
                    <input type="checkbox"
                        value={watched.watchAgain}
                        onChange={
                            (event) =>{
                                const copy = {...watched}
                                copy.emergency = event.target.checked
                                updateWatched(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button">
                Submit Movie
            </button>

        </form>
    </>

}    
    